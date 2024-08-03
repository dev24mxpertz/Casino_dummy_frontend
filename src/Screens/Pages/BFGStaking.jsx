import React from 'react';
import "../../Styles/BFGStaking.css";
import "../../Styles/ReferralProgram.css";
import ApexChart from '../Component/bfcStakingComponents/StackLineChart';
import StakingPool from '../Component/bfcStakingComponents/StakingPool';
import PayOutTable from '../Component/bfcStakingComponents/PayOutTable';

export default function BFGStaking() {
  return (
    <div className='bg-rfrl'>
      <h1 className='hd bfg-hd' >BFG Staking</h1>
      <div>
       <ApexChart/>
      </div>
      <div className='main-div'>
        <StakingPool />
      </div>
      <h1 className='text-white pt-2 pb-2 hd  bfg-hd'  >Total Payouts</h1>
      <PayOutTable/>
    </div>
  )
}
