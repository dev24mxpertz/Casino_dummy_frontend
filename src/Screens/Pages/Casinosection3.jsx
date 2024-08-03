import React from 'react'

function Casinosection3() {
  return (
    <>
      <div className='casino-s3'>
        <div className='casino-s3-left'>
          <div className='casino-s3-left-heading'>
            <h1>About  Casino</h1>
          </div>
          <div className='casino-s3-left-content'>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices egestas nisl lectus cras orci sit posuere consectetur. Justo vitae non dignissim arcu. Risus quam lorem eget pharetra viverra tincidunt. Rhoncus pharetra sapien ultrices felis sed mauris.
              Lorem ipsum dolor sit amet consectetur. Ultrices egestas nisl lectus cras orci sit posuere consectetur. Justo vitae non dignissim arcu.
            </p>
            <p>
              Risus quam lorem eget pharetra viverra tincidunt. Rhoncus pharetra sapien ultrices felis sed mauris
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices egestas nisl lectus cras orci sit posuere consectetur. Justo vitae non dignissim arcu. Risus quam lorem eget pharetra viverra tincidunt. Rhoncus pharetra sapien ultrices felis sed mauris.
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className='casino-s3-right'>
          <div>
            <img src={require('../../Assets/Icon/csinos logo 1.png')} alt="" />
          </div>
          <div>
            <h3 className='casino-s3-right-content'>
              You haven't registered yet?
            </h3>
          </div>
          <div className='w-100 d-flex justify-content-center'>
            <button style={{maxWidth:'445px', height:'55px'}} className="golden-btn"><img src={require('../../Assets/Icon/wallet-bold.png')} alt="" /> <span className='btn-register' style={{fontSize:'32px'}}>Register</span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Casinosection3
