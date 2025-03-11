// Rotas de colaborador

import { Routes, Route } from "react-router";

import { Refund } from "../pages/Refund";
import { NotFound } from "../pages/Notfound";
import { Confirm } from "../pages/confirm";

import { AppLayout } from "../components/AppLayout";

export function EmployeeRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Refund/>}/>
                <Route path="/Confirm" element={<Confirm/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}