/* 1️⃣ ***COMPONENTE APP*** 1️⃣
Implementar el componente App. En este ejercicio tendrás que crear diferentes rutas para algunos componentes. 
¡Ten en cuenta los nombres y las especificaciones de cada uno!

REQUISITOS
🟢 El componente Nav debe renderizarse en todas las rutas.
🟢 El componente Home debe renderizarse en la ruta "/".
🟢 El componente BandDetail debe renderizarse en la ruta "/band/:id".
🟢 El componente CreateBand debe renderizarse en la ruta "/band/create".
*/

import React from "react";
import Nav from "./components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home"
import BandDetail from "./components/BandDetail/BandDetail";
import CreateBand from "./components/CreateBand/CreateBand";

const App = () => {
   return (<div> 
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/band/create" element={<CreateBand/>} />
        <Route exact path="/band/:id" element={<BandDetail/>} />
      </Routes>
   </div>)
};
export default App;
