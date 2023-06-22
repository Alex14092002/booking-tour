import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import Lienhe from './Component/Lienhe'
import Detail from "./Component/Detail"
import Detail2 from "./Component/Detail2"
import Cart from "./Component/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tourtrongnuoc from "./Component/Tourtrongnuoc";
import Tournuocngoai from "./Component/Tournuocngoai";
import Gioithieu from "./Component/Gioithieu";

function App() {
  return (
    <>

      <Header />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/lienhe" element={<Lienhe/>} />  
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/detail2/:id' element={<Detail2/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/tourtrongnuoc' element={<Tourtrongnuoc/>}/>
        <Route path='/tournuocngoai' element={<Tournuocngoai/>}/>
        <Route path='/gioithieu' element={<Gioithieu/>}/>
      </Routes>
      <Footer />
    
    </>
  );
}

export default App;
