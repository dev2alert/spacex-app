import React, {useCallback, useMemo} from "react";
import {runInAction} from "mobx";
import {observer, useLocalObservable} from "mobx-react";
import styles from "./style.scss";

export namespace HoverGradientEffect {
    export interface ElementStore {
        hoverMode: boolean;
        hoverX: number;
        hoverY: number;
    }

    export type ElementProps<Component extends React.ElementType = "div" | "span" | "button"> = {
        component?: Component;
        hoverClassName?: string;
    } & React.ComponentProps<Component>;

    export const Element: React.FC<ElementProps> = observer(
        ({className, component = "div", hoverClassName, ...props}) => {
            const store = useLocalObservable<ElementStore>(() => ({
                hoverMode: false,
                hoverX: 0,
                hoverY: 0
            }));
            const {hoverMode, hoverX, hoverY} = store;

            const handleMouseOver = useCallback(() => {
                runInAction(() => {
                    store.hoverMode = true;
                });
            }, []);

            const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
                const rect: DOMRect = event.currentTarget.getBoundingClientRect();
                const hoverX: number = event.clientX - rect.left;
                const hoverY: number = event.clientY - rect.top;

                runInAction(() => {
                    store.hoverX = hoverX;
                    store.hoverY = hoverY;
                });
            }, []);

            const handleMouseOut = useCallback(() => {
                runInAction(() => {
                    store.hoverMode = false;
                });
            }, []);

            const classList = useMemo<string[]>(() => {
                const classList: string[] = [styles.element];

                if (className) {
                    classList.push(className);
                }
                if (hoverMode) {
                    classList.push(styles.hover);
                    if (hoverClassName) {
                        classList.push(hoverClassName);
                    }
                }

                return classList;
            }, [className, hoverMode, hoverClassName]);

            const style = useMemo<Record<string, string | number>>(() => {
                const style: Record<string, string | number> = {...props.style};

                if (hoverMode) {
                    if (hoverX) {
                        style["--hover-x"] = hoverX + "px";
                    }
                    if (hoverY) {
                        style["--hover-y"] = hoverY + "px";
                    }
                }

                return style;
            }, [props.style, hoverMode, hoverX, hoverY]);

            return React.createElement(component, {
                className: classList.join(" "),
                style: style,
                onMouseOver: handleMouseOver,
                onMouseMove: handleMouseMove,
                onMouseOut: handleMouseOut,
                ...props
            });
        }
    );
}
