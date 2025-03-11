import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes.tsx";
import { ManagerRoutes } from "./ManagerRoutes.tsx";
import { EmployeeRoutes } from "./EmployeeRoutes.tsx";

export function Routes(){
    return (
        <BrowserRouter>
            <ManagerRoutes />
        </BrowserRouter>
    )
}