import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import Lienhe from './Component/Lienhe'
import Detail from "./Component/Detail"



function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/lienhe" element={<Lienhe/>} />  
        <Route path='/detail/:id' element={<Detail/>}/>
      
      </Routes>
      <Footer />
    
    </>
  );
}

export default App;
