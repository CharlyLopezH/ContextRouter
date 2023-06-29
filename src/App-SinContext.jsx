import { useState } from "react";
import Hijo from "./coponentes/Hijo";
import Bisnieto from "./coponentes/Bisnieto";


export const App=()=>{

    const [nombre,setNombre]=useState('Raúl');

return (    
    <>
    <div className="container">
        <h1> useContext</h1>
        <code> Solución al paso de información entre componentes anidados </code>
        <hr></hr>
            <h3> En el papá:  {nombre}  </h3>  
            <Hijo data={nombre}/>            
    </div>
    </>
)
}
export default App;