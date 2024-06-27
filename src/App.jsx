import { Descripcion } from "./components/Descripcion"
import { Formulario } from "./components/Formulario"
import { ListarUsuarios } from "./components/ListarUsuarios"


export const App = () => {
  return (
    <div className="flex flex-col items-center text-center md:flex-row gap-8 lg:flex-row-reverse">
    
      <Descripcion/>
      <Formulario/>
      <ListarUsuarios/>
    </div>

  )
}
