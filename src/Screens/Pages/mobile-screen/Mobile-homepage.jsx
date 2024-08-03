import React from 'react'

function Mobilehomepage() {
    return (
        <>
            <div className='mobile-home-1'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div>
                        <img src={require('../../../Assets/Image/lasvegas.png')} alt="" />
                    </div>
                    <div className='mobile-caption_inner d-flex flex-column align-items-center'>
                        <h5>Welcome to the casino</h5>
                        <p>Enjoy a world of excitement and rewards</p>
                        <button  className="red-btn"><img style={{width:'100%',maxWidth:'25px'}} src={require('../../../Assets/Icon/wallet-bold.png')} alt="" /> Get started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mobilehomepage
