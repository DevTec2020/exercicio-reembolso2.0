import { BrowserRouter } from "react-router";

import { Loading } from "../components/Loading.tsx";

import { AuthRoutes } from "./AuthRoutes.tsx";
import { ManagerRoutes } from "./ManagerRoutes.tsx";
import { EmployeeRoutes } from "./EmployeeRoutes.tsx";

const isLoading = false

const session = {
    user: {
        role: "",
    },
}

export function Routes(){
    function Route() {
        switch (session.user.role) {
            case "employee":
                return  <EmployeeRoutes />     
                       
            case "manager":
                return <ManagerRoutes/>

            default:
                return <AuthRoutes/>
        }
    }
    
    if (isLoading) {
        return <Loading/>
    }

    return (
        <BrowserRouter>
            {Route()}
        </BrowserRouter>
    )
}