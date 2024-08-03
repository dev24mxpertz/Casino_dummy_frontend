import React from 'react'

function Mobilehomepage2() {
    return (
        <>
            <div className='mobile-home-2'>
                <div className='mobile-home-2-card'>
                    <div>
                        <img className='img-fluid mh-2-top' src={require('../../../Assets/Icon/csinos logo 1.png')} alt="" />
                    </div>
                    <div className='mh-2-center'>
                        <h3>Play slots. Original games with the best RTP</h3>
                        <button className="red-btn"><img src={require('../../../Assets/Icon/wallet-bold.png')} alt="" /> Go to the casino</button>
                    </div>
                    <div>
                        <img className='img-fluid mh-2-bottom' src={require('../../../Assets/Image/home-s2.png')} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mobilehomepage2
