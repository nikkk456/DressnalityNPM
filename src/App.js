import './App.css';
import Navbar from "./Component/Navbar";
import Home from './Component/Home';
import Footer from './Component/Footer';
import { Route,  Routes } from 'react-router-dom';
import Kurti from './Component/Kurti';
import Blog1 from './Component/Blog1';
import { Elements } from '@stripe/react-stripe-js';


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
import Customise from './Component/Customise';
import Faq from './Component/Faq';
import AboutUs from './Component/AboutUs';
import { loadStripe } from '@stripe/stripe-js';
import Success from './Component/Success';



function App() {
  const stripePromise = loadStripe('pk_test_51MeMKbSFgSxoeVTn72bQmFr1bxMvRTkUdC7XcDOj3c9ISVArdgDRiWsKyV4hF2ZmNRkCxhHAmAxWkgOk0rTqpslG00zF7bVfpm');
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
        {/* <Route exact path='/Checkout' element={<Checkout/>} /> */}
        {/* <Route exact path='/BuyNow' element={<Elements stripe={stripePromise}><BuyNow/></Elements>} /> */}
        <Route exact path='/SingleProduct/:id' element={<SingleProduct/>} />
        <Route exact path='/SingleProduct/:id/Customise' element={<Customise/>} />
        <Route exact path='*' element={<Error/>} />
        <Route exact path='/Contact' element={<Contact/>} />
        <Route exact path='/Cart' element={<Addtocart stripePromise={stripePromise}/>} />
        <Route exact path='/Products' element={<All/>} />
        <Route exact path='/ProductInsert' element={<ProductInsert/>} />
        <Route exact path='/Track' element={<Track/>} />
        <Route exact path='/FAQ' element={<Faq/>} />
        <Route exact path='/AboutUs' element={<AboutUs/>} />
        <Route exact path='/Success' element={<Success/>} />
        </Routes>
        <Footer />
      

    </>
  );
}

export default App;
