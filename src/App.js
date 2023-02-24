import './App.css';
import Navbar from "./Component/Navbar";
import Home from './Component/Home';
import Footer from './Component/Footer';
import { Route,  Routes } from 'react-router-dom';
import Kurti from './Component/Kurti';
import Blog1 from './Component/Blog1';
import Blog from './Component/Blog';
import Blog3 from './Component/Blog3';
import Blog2 from './Component/Blog2';
import SingleProduct from './Component/SingleProduct';
import Error from './Error';
import ProductInsert from './Component/ProductInsert';
import Contact from './Component/Contact';
import All from './Component/All';
import Dress from './Component/Dress';
import Tops from './Component/Tops';
import Addtocart from './Component/Addtocart';
import BuyNow from './Component/BuyNow';
import Checkout from './Component/Checkout';
import Track from './Component/Track';

function App() {
  return (
    <>
    
        <Navbar />
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Kurti' element={<Kurti/>} />
        <Route exact path='/Dress' element={<Dress/>} />
        <Route exact path='/Tops' element={<Tops/>} />
        <Route exact path='/Blog1' element={<Blog1/>} />
        <Route exact path='/Blog2' element={<Blog2/>} />
        <Route exact path='/Blog3' element={<Blog3/>} />
        <Route exact path='/Blog' element={<Blog/>} />
        <Route exact path='/Checkout' element={<Checkout/>} />
        <Route exact path='/BuyNow' element={<BuyNow/>} />
        <Route exact path='/SingleProduct/:id' element={<SingleProduct/>} />
        <Route exact path='*' element={<Error/>} />
        <Route exact path='/Contact' element={<Contact/>} />
        <Route exact path='/Cart' element={<Addtocart/>} />
        <Route exact path='/Products' element={<All/>} />
        <Route exact path='/ProductInsert' element={<ProductInsert/>} />
        <Route exact path='/Track' element={<Track/>} />
        </Routes>
        <Footer />
      

    </>
  );
}

export default App;
