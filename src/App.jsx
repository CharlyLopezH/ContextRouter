import { Route, Routes, Navigate, Link } from "react-router-dom";
import {Home,Login,About,EtcPage } from './AppRutas';
import Navbar from "./componentes/Navbar";
import { UserProvider } from "./context/UserProvider";
// import Home from "./Home";
// import Login from "./Login";
// import About from "./About";
// import EtcPage from "./EtcPage";

const App=()=>{
    return (
        <UserProvider>
        <div className="container">            
            <code>Genera un contexto global para compartir información entre componentes de manera directa independientemente de su nivel en el árbol</code>
            <p></p>
            
            <Navbar/>

            <hr/>
            <Routes>
                <Route path="/" element={<Home/>} />                                    
                <Route path="login" element={<Login/>} />    
                <Route path="about" element={<About/>} />   
                <Route path="EtcPage" element={<EtcPage/>} />                
                <Route path="/*" element={<Navigate to="/EtcPage" replace={true}/>}/>
            </Routes>
        </div>        
        </UserProvider>
    )
}
export default App;