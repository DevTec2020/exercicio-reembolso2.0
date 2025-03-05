import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes.tsx";

export function Routes(){
    return (
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    )
}