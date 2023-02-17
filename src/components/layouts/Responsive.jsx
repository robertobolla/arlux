import React from 'react';
import landingPC from '../../assets/images/items/instalandoCartel.png'

const Responsive = () => {

  

  return (
    <section className="tf-section visions">
    <div className="container">
        <div className="row reverse">
            <div className="col-xl-7 col-md-12">
                <div className="group-image" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                    <img src={landingPC} alt="Landing" />
                </div>
            </div>
            <div className="col-xl-5 col-md-12">
                <div className="block-text pt-12">
                    <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Servicio Profesional</h5>
                    <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">NOS ENCARGAMOS DE TODO</h3>
                    <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration="1000">Dejamos tu cartel instalado y funcionando sin costo adicional.</p>                                
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default Responsive;