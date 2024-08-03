import { Button, Flex } from 'antd';
import React, { useState } from 'react';

export default function ReferralNav() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };
    return (

        <div className='main-nav'>
            <Flex gap="small" wrap="wrap" className='rfrl-nav'>
                <Button
                    className={`nav-btn ${activeButton === 0 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(0)}
                >
                    Dashboard
                </Button>
                <Button
                    className={`nav-btn ${activeButton === 1 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(1)}
                >
                    Campaigns
                </Button>
                <Button

                    className={`nav-btn ${activeButton === 2 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(2)}
                >
                    Referrals
                </Button>
            </Flex>
        </div>


    )
}
