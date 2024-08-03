import React from 'react'


function NavButtons({bgNav , icon ,btnText}) {
  return (
 <>
 <div>
    <button className='CommonBtn' style={bgNav} >
        <span ><img src={icon} alt='icons'/></span>
         <p className='NavTextCommon' style={{fontSize:"20px"}}>{btnText}</p>
    </button>
 </div>
 </>
  )
}

export default NavButtons