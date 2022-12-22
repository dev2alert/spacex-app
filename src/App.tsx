import "normalize.css";
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "@pages/common/fonts/connect.scss";
import "./global.scss";
import NotFound from "./pages/NotFound";

export const HomePage = React.lazy(() => import("./pages/Home"));

export function App(): React.ReactElement {
    return (
        <React.Suspense fallback={null}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<HomePage />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    );
}
