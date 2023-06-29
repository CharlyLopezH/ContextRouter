import { Route, Routes, Navigate, Link } from "react-router-dom";
import {Home,Login,About,EtcPage } from './AppRutas';
// import Home from "./Home";
// import Login from "./Login";
// import About from "./About";
// import EtcPage from "./EtcPage";

const App=()=>{
    return (
        <>
        <div className="container">
            <h2>MainApp Context</h2>            
            <code>Genera un contexto global para compartir información entre componentes de manera directa independientemente de su nivel en el árbol</code>
            <p></p>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">Acerca de..</Link>

            <hr/>
            <Routes>
                <Route path="/" element={<Home/>} />                                    
                <Route path="login" element={<Login/>} />    
                <Route path="about" element={<About/>} />   
                <Route path="EtcPage" element={<EtcPage/>} />                
                <Route path="/*" element={<Navigate to="/EtcPage" replace={true}/>}/>
            </Routes>
        </div>        
        </>
    )
}
export default App;