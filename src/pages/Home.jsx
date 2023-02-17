import React from 'react';
import dataServices from '../assets/fake-data/data-services';
import dataClients from '../assets/fake-data/data-clients';
import Header from '../components/header/Header'
import Responsive from '../components/layouts/Responsive';
import Footer from '../components/footer/Footer'
import Services from '../components/layouts/Services';
import Clients from '../components/layouts/Clients';
import Slider from '../components/slider/Slider';
import ButtonWhatsapp from '../components/button/ButtonWhatsapp';



const Home = () => {
  return (
    <div className='home-3'>
        <Header />
        <Slider />
        <Services data={dataServices} />
        <Responsive />           
        <Clients data={dataClients} />                  
        <ButtonWhatsapp/>
        <Footer />
    </div>
  );
}

export default Home;