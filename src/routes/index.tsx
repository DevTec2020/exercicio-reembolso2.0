import { BrowserRouter } from "react-router";

import { Loading } from "../components/Loading.tsx";

import { AuthRoutes } from "./AuthRoutes.tsx";
import { ManagerRoutes } from "./ManagerRoutes.tsx";
import { EmployeeRoutes } from "./EmployeeRoutes.tsx";

const isLoading = false

export function Routes(){
    if (isLoading) {
        return <Loading/>
    }

    return (
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    )
}