import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from "swiper";

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import img1 from '../assets/images/items/circulares/item01.png'
import img2 from '../assets/images/items/circulares/item02.png'
import img3 from '../assets/images/items/circulares/item03.png'
import img4 from '../assets/images/items/circulares/item04.png'
import img5 from '../assets/images/items/circulares/item05.png'
import img6 from '../assets/images/items/circulares/item06.png'
import img7 from '../assets/images/items/circulares/item07.png'
import img8 from '../assets/images/items/circulares/item08.png'
import img9 from '../assets/images/items/circulares/item09.png'
import img10 from '../assets/images/items/circulares/item10.png'
import img11 from '../assets/images/items/circulares/item11.png'
import img12 from '../assets/images/items/circulares/item12.png'
import img13 from '../assets/images/items/circulares/item13.png'


const Collections = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [data] = useState([
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img: img4
        },
        {
            img: img5
        },
        {
            img: img6
        },
        {
            img: img7
        },
        {
            img: img8
        },
        {
            img: img9
        },
        {
            img: img10
        },
        {
            img: img11
        },
        {
            img: img12
        },
        {
            img: img13
        },
    ])
    return (
        <div className='collections'>
            <Header />
            <section className="tf-section collection">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"><span>Arlux</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">CARTELES</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">CORPÓREAS DE POLIFÁN</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-50">
                        <div className="col-xl-7 col-md-12">
                            <div className="group-image">
                            <Swiper 
                                style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                                }}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="gallery-top"
                            >
                                
                                {
                                    data.map((data,index) => (
                                        <SwiperSlide key={index}>
                                            <div className="item bg-2"><img src={data.img} alt="Monteno" /></div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="gallery-thumbs"
                            >
                                {
                                    data.map((data,index) => (
                                        <SwiperSlide key={index}>
                                            <div className="item bg-2"><img src={data.img} alt="Monteno" /></div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>        
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text">
                                <h3 className="fs-42 mb-31">Nuestros Trabajos</h3>
                                <p className="fs-18"> Algunos de nuestros trabajos en carteles con letras corpóreas de polifán. Ideal para interiores. </p>
                                <h3 className="fs-30 mt-37">Otros tipos de carteles</h3>
                                <ul className="nft">
                                    <li><Link to="/carteles-circulares"><i className="fa fa-arrow-right"></i><span>Carteles Circulares</span></Link></li>
                                    <li><Link to="/lona-impresa"><i className="fa fa-arrow-right"></i><span>Lona Impresa</span></Link></li>
                                    <li><Link to="/chapa-calada"><i className="fa fa-arrow-right"></i><span>Chapa Calada</span></Link></li>
                                    <li><Link to="/corporea-chapa"><i className="fa fa-arrow-right"></i><span>Corpóreas de Chapa</span></Link></li>                                   
                                    <li><Link to="/ploteo-vinilo"><i className="fa fa-arrow-right"></i><span>Ploteo en Vinilo</span></Link></li>
                                </ul>                               
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>           
            <Footer />
        </div>
    );
}

export default Collections;