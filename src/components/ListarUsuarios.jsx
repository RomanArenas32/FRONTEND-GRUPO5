import axios from "axios";
import { useEffect, useState } from "react";

export const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      const resp = await axios.get("http://localhost:8080/user");
      setUsuarios(resp.data.usuarios);
    };

    obtenerUsuarios();
  }, []);

  console.log(usuarios);
  return <>
    {
        usuarios.map(us => (
            <div>
                <h2>{us.usuario}</h2>
            </div>
        ))
    }
  </>
};
