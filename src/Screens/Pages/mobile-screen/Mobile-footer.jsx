import React, { useState } from 'react';
import { Button, Collapse } from 'antd';
import { Link } from 'react-router-dom';

const { Panel } = Collapse;

const items1 = [
    {
        label: <Link href="">Home</ Link>,
        key: '0',
    },
    {
        label: <Link href="#">Slots</Link>,
        key: '1',
    },
    {
        label: <Link href="#">Tournament</Link>,
        key: '2',
    },
    {
        label: <Link href="#">Jackpots</Link>,
        key: '3',
    },
    {
        label: <Link href="#">Live Games</Link>,
        key: '4',
    },
];

const items2 = [
    {
        label: <Link href="#">Faqs</Link>,
        key: '0',
    },
    {
        label: <Link href="#">Support</Link>,
        key: '1',
    },
];

const Mobilefooter = () => {
    const [activePanel, setActivePanel] = useState(null);

    const handleCollapseVisibleChange = (key) => {
        setActivePanel(activePanel === key ? null : key);
    };

    return (
        <div>
            <div style={{borderBottom:'0.5px solid #FB2B52'}}>
                <div>
                    <Button className='mobile-footer-btn' type="link">Casino</Button>
                </div>
                <Collapse
                    bordered={false}
                    activeKey={activePanel}
                    onChange={handleCollapseVisibleChange}
                >
                    <Panel className='company-panel' header="Company" key="1">
                        {items1.map((item) => (
                            <span key={item.key}>{item.label}</span>
                        ))}
                    </Panel>
                    <Panel className='company-panel' header="Support" key="2">
                        {items2.map((item) => (
                            <span key={item.key}>{item.label}</span>
                        ))}
                    </Panel>
                </Collapse>
                <div>
                    <Button className='mobile-footer-btn' type="link">Subscribe to Our Newsletter</Button>
                </div>
            </div>
        </div>
    );
};

export default Mobilefooter;
