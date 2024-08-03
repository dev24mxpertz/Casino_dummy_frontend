import React from 'react';
import homepageS2Bg from '../../Assets/Image/homepage-s2-bg.png';
import Mobilehomepage2 from './mobile-screen/Mobile-homepage-2';

function HomeSection2() {
    return (
        <>
            <div>
                <div className='home-s2 d-none d-md-block'>
                    <img className='w-100' src={homepageS2Bg} alt="Background" />
                    <div className='s2-inner-card'>
                        <img className='img-fluid' src={require('../../Assets/Icon/csinos logo 1.png')} alt="" />
                        <h3>Play slots. Original games with the best RTP</h3>
                        <button className="red-btn"><img src={require('../../Assets/Icon/wallet-bold.png')} alt="" /><span style={{fontSize:'22px'}}> Go to the casino</span></button>
                    </div>
                </div>
                <div className="d-block d-md-none">
                    <Mobilehomepage2 />
                </div>
            </div>
        </>
    );
}

export default HomeSection2;


