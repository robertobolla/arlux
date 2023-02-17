import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ButtonWhatsapp from '../components/button/ButtonWhatsapp';

const Contact = () => {
    return (
        <div className='page-contact'>
            <Header />          
            <section className="tf-section contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h1 className="heading-contact" data-aos="fade-in" data-aos-duration="1000"><span>contacto</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Envía un mensaje</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">Nos comunicaremos contigo<br /> a la brevedad</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-left">
                                <ul>                                  
                                    <li data-aos="fade-up">
                                        <div className="icon"><i className="fas fa-phone-alt"></i></div>
                                        <div className="info">
                                            <h5>Celular (whatsapp)</h5>
                                            <p className="fs-18">3816480083</p>
                                        </div>
                                    </li>                             
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="contact-left">
                                <ul>
                                    <li data-aos="fade-up">
                                        <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                                        <div className="info">
                                            <h5>Dirección</h5>
                                            <p className="fs-18">Santiago 572, San Miguel de Tucumán</p>
                                        </div>
                                    </li>                                                          
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </section>

            <section className="map">
                <div className="container">
                    <div className="col-12">
                        <p data-aos="fade-up"><iframe title='map' src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Santiago%20del%20Estero%20572,%20San%20miguel%20de%20Tucum%C3%A1n+(escal-E)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="600" height="450"  allowFullScreen="" loading="lazy"></iframe></p>
                    </div>
                </div>
            </section>
            <ButtonWhatsapp />          
            <Footer />
        </div>
    );
}

export default Contact;