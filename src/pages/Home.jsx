import React from 'react'
import TopStrip from "../components/TopStrip";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import GridSection from '../components/GridSection';
import Features from '../components/Features';
import Fitguide from '../components/Fitguide';
import EmailSubscription from '../components/EmailSubscription';
import ProductList from '../components/ProductList';
import ProductCard from '../components/ProductCard';






function Home() {
  return (
    <div>
      <TopStrip/>
      <Hero/>
     
      <GridSection/>
      <div className='px-28 py-7'> <Banner/></div>

      <Fitguide/>
      <Features/>
      <ProductList/>
      <EmailSubscription/>
      
      
      
      
         </div>
  )  
}

export default Home;

    