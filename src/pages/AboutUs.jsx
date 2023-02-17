import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import img from '../assets/images/items/sobreNosotros.png'
import About from '../components/layouts/About';
import ButtonWhatsapp from '../components/button/ButtonWhatsapp';


const AboutUs = () => {
    return (
        <div className='about'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body ab">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Sobre Nosotros</h2>
                                <p className="fs-24 mb-33" >Somos una empresa con más de 30 años en <br/>el rubro, con una sólida trayectoria y cientos <br/> 
                                de clientes que nos avalan. Arlux es garantía <br/> de responsabilidad, rapidez, seriedad y calidad<br/>en los materiales y trabajos realizados.</p>
                            </div>
                            <img src={img} alt="nosotros" />
                        </div>
                    </div>
                </div>
            </section>
            <About />        
            <ButtonWhatsapp/>                     
            <Footer />
        </div>
    );
}

export default AboutUs;