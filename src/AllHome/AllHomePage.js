import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Itemsection from './Itemsection';
import Aboutsection from './Aboutsection';
import Ringsection from './Ringsection';
import Clientsection from './Clientsection';
import Footer from './Footer';
import { CartProvider } from "react-use-cart";



function AllHomePage() {
  return (
    <CartProvider>
      <div class="hero_area">
      <Header/>
      <Slider/>
      </div>
      <Itemsection/>
      <Aboutsection/>
      <Ringsection/>
      <Clientsection/>
      <Footer/>
    </CartProvider>
  )
}

export default AllHomePage;