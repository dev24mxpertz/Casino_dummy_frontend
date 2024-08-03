import React from 'react'

import NavButtons from '../NavButtons';
import speaker from "../../../Assets/Icon/speaker.png";
import download from "../../../Assets/Icon/solar_download-bold.png"


function NavBarReferral() {
    const bgforRefrl= {background: "#1D2837",color:"#FFFFFF"}
    const bgforRefrl2= {background: "#1D2837",color:"#FFFFFF"}
    

    return (
        <div>
            <div className='rfrlNavBarTop'>
                {/* <div>
                    <p style={{ font: "24px" }}><IoIosArrowBack />Back</p>
                </div> */}

                <div className='d-flex align-items-center justify-content-between' style={{gap:"1rem"}}>
                    <NavButtons bgNav={bgforRefrl} icon={speaker} btnText="About Referal system"/>
                    <NavButtons bgNav={bgforRefrl2} icon={download} btnText="Promo material"/>
                </div>
            </div>
        </div>
    )
}

export default NavBarReferral