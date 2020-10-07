import React from 'react';
import './App.css'
import Hero from './components/Home/Hero/Hero'
import Categories from './components/Home/Categories/Categories'
import Products from './components/Home/Products/Products'
import Offer from './components/Home/Offer/Offer'
import Testimonial from './components/Home/Testimonial/Testimonial'
import Brands from './components/Home/Brands/Brands'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Products />
      <Offer />
      <Testimonial />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
