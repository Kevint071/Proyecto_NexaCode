import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Python from "./Components/Python/Python";
import IntroPython from "./Components/Python/IntroduccionPython/IntroPython";
import InstalarPython from "./Components/Python/IntroduccionPython/InstalarPython";

import DefinicionDict from "./Components/Python/Diccionarios/Definicion";
import AñadirElementosDict from "./Components/Python/Diccionarios/AñadirElementos";



function App() {
  return (
    <BrowserRouter basename="Proyecto_NexaCode">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Navigate to="/Proyecto_NexaCode"/>}/> */}
        <Route path="Python/*" element={<Python />}>
          <Route path="Introduccion-a-Python" element={<IntroPython />}/>
          <Route path="Diccionarios/Definicion" element={<DefinicionDict />} />
          <Route path="Diccionarios/Manipulacion-elementos-en-diccionario" element={<AñadirElementosDict/>}/>
          <Route path="Instalar-Python" element={<InstalarPython/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
