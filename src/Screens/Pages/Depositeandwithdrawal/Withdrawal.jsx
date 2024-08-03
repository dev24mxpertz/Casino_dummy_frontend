import React, { useState, useEffect, useRef } from 'react';
import { Avatar, Input, Select, Space } from 'antd';
import bitcoinImage from '../../../Assets/Icon/logos_bitcoin.png';
import cryptoImage from '../../../Assets/Icon/cryptocurrency-color_usdt.png';
import { Form, InputGroup } from 'react-bootstrap';

const { Option } = Select;

function Withdrawal() {
    const defaultOption = (
        <div>
            <img src={bitcoinImage} alt='' style={{ marginRight: '8px' }} />
            <p>Bit Coin</p>
        </div>
    );
    const [firstDropdownValue, setFirstDropdownValue] = useState("Please Select Value");
    const [secondDropdownValue, setSecondDropdownValue] = useState('Red');
    const [firstOptions, setFirstOptions] = useState(["Select Value"]);
    const [secondOptions, setSecondOptions] = useState(["Select Value"]);
    const [initialFirstOptions, setInitialFirstOptions] = useState([]);

    useEffect(() => {
        fetchFirstDropdownData().then(data => {
            setFirstOptions(data);
            setInitialFirstOptions(data);
        });

        fetchSecondDropdownData().then(data => {
            setSecondOptions(data);
        });
    }, []);

    const fetchFirstDropdownData = async () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    { avatar: bitcoinImage, name: 'BTC', price: '0.0000000000' },
                    { avatar: cryptoImage, name: 'USDT', price: '0.0000000000' },
                    { avatar: bitcoinImage, name: 'BTC-1', price: '0.0000000000' },
                    { avatar: cryptoImage, name: 'USDT-1', price: '0.0000000000' },
                    { avatar: bitcoinImage, name: 'BTC-2', price: '0.0000000000' },
                    { avatar: cryptoImage, name: 'USDT-2', price: '0.0000000000' },
                    { avatar: bitcoinImage, name: 'BTC-3', price: '0.0000000000' }
                ]);
            }, 1000);
        });
    };

    const fetchSecondDropdownData = async () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    { avatar: bitcoinImage, name: 'BTC' },
                    { avatar: cryptoImage, name: 'BTC-y' },
                    { avatar: bitcoinImage, name: 'BTC-x' }
                ]);
            }, 1000);
        });
    };

    const handleFirstDropdownChange = (value) => {
        setFirstDropdownValue(value);
    };

    const handleSecondDropdownChange = (value) => {
        setSecondDropdownValue(value);
    };
    const handleSearch = (value) => {
        let filteredOptions;
        if (value.trim() !== "") {
          filteredOptions = initialFirstOptions.filter(option =>
            option.name.toLowerCase().includes(value.toLowerCase())
          );
        } else {
          filteredOptions = initialFirstOptions;
        }
        setFirstOptions(filteredOptions);
      };
    const url = cryptoImage;
    return (
        <div className="deposite-container">
            <div className="deposite-dropdown-box mb-3">
                <div className="dropdown-container">
                    <Select
                        defaultValue={firstDropdownValue}
                        onChange={handleFirstDropdownChange}
                        placeholder="Select Value"
                        className="deposite-dropdown-1"
                        dropdownRender={(menu) => (
                            <div>
                                <Input.Search
                                    placeholder="Search options"
                                    onChange={(e) => handleSearch(e.target.value)}
                                    style={{ width: '100%' }}
                                    className='dropdown-search'
                                />
                                <div style={{ maxHeight: 200, overflow: 'auto' }}>
                                    {menu}
                                </div>
                            </div>
                        )}
                        filterOption={true} 
                    >
                        {firstOptions.map((option) => (
                            <Option key={option.name} value={option.name}>
                                <div className='first-btn-dropdown'>
                                    <div>
                                        <img src={option.avatar} alt={option.name} className="avatar" style={{ marginRight: '8px' }} />
                                    </div>
                                    <div>
                                        {option.name}
                                    </div>
                                    <div>
                                        {option.price}
                                    </div>
                                </div>
                            </Option>
                        ))}
                    </Select>
                </div>
                <div className="dropdown-container">
                    <Select
                        value={secondDropdownValue}
                        onChange={handleSecondDropdownChange}
                        placeholder="Select Value"
                        className="deposite-dropdown-2"
                    >
                        {secondOptions.map(option => (
                            <Option key={option.name} value={option.name}>
                                <img src={option.avatar} alt={option.name} className="avatar" style={{ marginRight: '8px' }} />
                                {option.name}
                            </Option>
                        ))}
                    </Select>
                    {secondDropdownValue === null && <span style={{ color: 'gray' }}>Select Value</span>}
                </div>
            </div >
            <div className='p-4'>
                <input className='input-mail-box' placeholder="Enter your address" />
            </div>
            <div>
                <div className='enter-amount-box d-flex align-items-center justify-content-between flex-row p-4'>
                    <div className='b-bag'>
                        <InputGroup className=" amount-link-btn">
                            <Form.Control
                                placeholder="Enter the amount"
                                aria-label="Enter the amount"
                                aria-describedby="amount-input"
                            />
                            <button id="" className="amount-button  red-btn">All</button>
                        </InputGroup>
                    </div>
                    <div className='balance-box'>
                        <div>
                            <p className='ps-2'>Balance</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between flex-row pe-2'>
                            <Avatar src={<img style={{ width: '20px', height: '20px' }} src={url} alt="avatar" />} />
                            <p>0.00000000000000</p>
                        </div>
                    </div>
                </div>
                <div className='p-4'>
                    <p>The minimum withdrawal amount is 10 USDT. BEP-20 (BNB Chain) only.</p>
                    <button id="" className="withdraw-btn green-btn"><img src={require('../../../Assets/Icon/wallet-bold.png')} alt="" /><span style={{ fontSize: '22px' }}>Withdraw</span></button>
                    <p className='d-none d-sm-block'>Transaction fee -10 BFG</p>
                </div>
            </div>
        </div>
    )
}

export default Withdrawal
