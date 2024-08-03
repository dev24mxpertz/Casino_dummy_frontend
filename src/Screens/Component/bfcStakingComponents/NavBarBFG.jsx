import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import GreenDot from "../../../Assets/Icon/Ellipse 15.png";
import MoneyBag from "../../../Assets/Icon/money-bag.png";
import Phone from "../../../Assets/Icon/phone.png";
import NavButtons from '../NavButtons';

function NavBarBFG() {
    const bgforBFG= {background: "#1D2837",color:"#FFFFFF"}
    const calcBg = { background: "#FDBE1B", color: "#161F2C" };

  return (
    <div>
            <div className='rfrlNavBarTop'>
                <div className='d-flex align-items-center justify-content-between calc' style={{gap:"1rem"}}>
                    <NavButtons bgNav={bgforBFG} icon={MoneyBag} btnText="About Staking" />
                    <NavButtons bgNav={bgforBFG} icon={GreenDot} btnText="About BFG"  />
                    <NavButtons className='calc' bgNav={calcBg} icon={Phone} btnText="Calculate"  />
                </div>
            </div>
            
     </div>
  )
}

export default NavBarBFG