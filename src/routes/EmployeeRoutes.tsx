// Rotas de colaborador

import { Routes, Route } from "react-router";

import { Refund } from "../pages/Refund";
import { NotFound } from "../pages/Notfound";

export function EmployeeRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Refund/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}