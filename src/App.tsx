import { AuthContext } from "./contexts/AuthContext"
import { Routes } from "./routes"


export function App(){
  return (
    <AuthContext.Provider value={{ name: "Leonardo"}}>
      <Routes />
    </AuthContext.Provider>
      
  
  )      
}