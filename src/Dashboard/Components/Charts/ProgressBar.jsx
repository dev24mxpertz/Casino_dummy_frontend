import { Progress } from 'antd'
import React from 'react'

function ProgressBar() {
    return (
        <>
            <div className='w-100'>
                <div className='d-flex w-100 p-2'>
                    <div className='d-flex justify-content-center flex-column pe-5'>
                        <Progress strokeWidth="10" strokeColor="#D9D9D9" trailColor="#a19d9de3" strokeLinecap="round" type="dashboard" percent={75.2} gapDegree={0} size={200} />
                    </div>
                    <div className='Webinar-container'>
                        <p className=''>0% Based on like / /disilikes 100%</p>
                        <h5>Webinars</h5>
                        <h6>Learn how you can earn more then 20% each month!</h6>
                        <p>Join our webinar and learn how to increase more
                            then 20% your monthly income.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar