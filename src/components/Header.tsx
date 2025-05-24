import logosvg from "../assets/logo.svg"
import logoutsvg from "../assets/logout.svg"

import { useAuth } from "../hooks/useAuth"

export function Header() {
    const auth  = useAuth()

    return (
        <header className="w-full flex justify-between">
            <img src={logosvg} alt="Logo" className="my-8"/>

            <div className="flex  items-center gap-3">
                <span className="text-sm font-semibold text-gray-200">
                    olá, Leonardo
                </span>

                <img 
                    src={logoutsvg} 
                    alt="icone de sair" 
                    className="my-8 cursor-pointer hover:opacuty-75 transition ease-linear"
                    onClick={() => auth.remove()}
                />
            </div>
        </header>
    )
}