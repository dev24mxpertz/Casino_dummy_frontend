import React from 'react';
import { Carousel } from 'antd';
import image1 from '../../Assets/Image/Varinat=Header 1.png';
import image2 from '../../Assets/Image/Varinat=Header 2.png';
import Mobilehomepage from './mobile-screen/Mobile-homepage';

const Homeheader = () => {
    return (
        <>
            <div>
                <div id="carouselExampleCaptions" className="carousel slide d-none d-md-block" data-bs-ride="carousel">
                    <Carousel >
                        <div className="carousel-item">
                            <img src={image1} alt="" />
                            <div className="carousel-caption">
                                <div className='caption_inner'>
                                    <h5>Welcome to the Casino</h5>
                                    <p>Enjoy a world of excitement and rewards</p>
                                    <button className="red-btn"><img src={require('../../Assets/Icon/wallet-bold.png')} alt="" /> <span style={{fontSize:'22px'}}>Get started</span></button>                                 
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={image2} className="d-block w-100" alt="" />
                            <div className="carousel-caption">
                                <div className='caption_inner'>
                                    <h5>Welcome to the casino</h5>
                                    <p>Enjoy a world of excitement and rewards</p>
                                    <button className="red-btn"><img src={require('../../Assets/Icon/wallet-bold.png')} alt="" /> <span style={{fontSize:'22px'}}>Get started</span></button>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className="d-block d-md-none">
                    <Mobilehomepage />
                </div>
            </div>
        </>
    );
}

export default Homeheader;