import React, {useMemo} from "react";
import {Container} from "../Container";

export interface SectionProps extends React.ComponentProps<"section"> {
    container?: boolean;
    className?: string;
    containerClassName?: string;
}

export function Section({
    container = false,
    className,
    containerClassName,
    children,
    ...props
}: SectionProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [];

        if (className) {
            classList.push(className);
        }

        return classList;
    }, [className]);

    return (
        <section className={classList.join(" ")} {...props}>
            {container ? (
                <Container className={containerClassName}>{children}</Container>
            ) : (
                children
            )}
        </section>
    );
}
