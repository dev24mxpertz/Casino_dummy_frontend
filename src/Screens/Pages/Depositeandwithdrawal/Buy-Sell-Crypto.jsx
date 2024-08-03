import React, { useState, useEffect } from 'react';
import { Checkbox, Select } from 'antd';
import bitcoinImage from '../../../Assets/Icon/logos_bitcoin.png';

const { Option } = Select;

function BuySellCrypto() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const [thirdDropdownValue, setThirdDropdownValue] = useState('BTC'); // Set initial value here
  const [thirdOptions, setThirdOptions] = useState([]);
  const [fourthDropdownValue, setFourthDropdownValue] = useState('BTC'); // Set initial value here
  const [fourthOptions, setFourthOptions] = useState([]);

  useEffect(() => {
    fetchThirdDropdownData().then(data => {
      setThirdOptions(data);
    });
  }, []);

  const fetchThirdDropdownData = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { avatar: bitcoinImage, name: 'BTC' },
          { avatar: bitcoinImage, name: 'BTC-y' },
          { avatar: bitcoinImage, name: 'BTC-x' }
        ]);
      }, 1000);
    });
  };

  const handleThirdDropdownChange = (value) => {
    setThirdDropdownValue(value);
  };

  useEffect(() => {
    fetchFourthDropdownData().then(data => {
      setFourthOptions(data);
    });
  }, []);

  const fetchFourthDropdownData = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { avatar: bitcoinImage, name: 'BTC' },
          { avatar: bitcoinImage, name: 'BTC-y' },
          { avatar: bitcoinImage, name: 'BTC-x' }
        ]);
      }, 1000);
    });
  };

  const handleFourthDropdownChange = (value) => {
    setFourthDropdownValue(value);
  };
  return (
    <div className="buy-crypto-container">
      <div className="you-send">You send</div>
      <div className="you-got fs-6 d-block d-sm-none">You balance: 000000000 BTC </div>
      <div className="crypto-box">
        <div className="Currency-c">
          <div className="Currency-box">
            <div>Currency</div>
            <div>
            <Select
                value={fourthDropdownValue}
                onChange={handleFourthDropdownChange}
                placeholder="Select Value"
                className="you-get-dropdown"
              >
                {fourthOptions.map(option => (
                  <Option key={option.name} value={option.name} className="you-get-dropdown">
                    <img src={option.avatar} alt={option.name} className="avatar" style={{ marginRight: '8px' }} />
                    {option.name}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        </div>
        <div className="amount-right-box">
          <div className="amount-box">
            <div>
              <div className='d-flex gap-2'>
                <img src={bitcoinImage} className="img-2" alt="BTC" />
                <div>Amount</div>
              </div>
              <div className='max'>Max</div>
            </div>
          </div>
        </div>
      </div>
      <img src={require('../../../Assets/Icon/reverse.png')} className="img-3 d-none d-sm-block" alt="Reverse" />
      <div className="you-got">You get</div>
      <div className="you-got fs-6 d-block d-sm-none">1 BTC=48000 USDT </div>
      <div className="crypto-box">
        <div className="Currency-c">
          <div className="Currency-box">
            <div>Currency</div>
            <div>
              <Select
                value={thirdDropdownValue}
                onChange={handleThirdDropdownChange}
                placeholder="Select Value"
                className="you-get-dropdown"
              >
                {thirdOptions.map(option => (
                  <Option key={option.name} value={option.name}>
                    <img src={option.avatar} alt={option.name} className="avatar" style={{ marginRight: '8px' }} />
                    {option.name}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        </div>
        <div className="amount-right-box">
          <div className="amount-box">
            <div>
              <div className='d-flex gap-2'>
                <img src={bitcoinImage} className="img-2" alt="BTC" />
                <div>Amount</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="t-and-c">
        <Checkbox className='you-get-checkbox' onChange={onChange}></Checkbox>
        <div className="buy-tandc">
          I have read and agree{" "}
          <span style={{ textDecoration: "underline", color: "rgba(34,131,246,1)" }}>
            Terms & Conditions
          </span>
        </div>
      </div>
      <button id="" className="buy-confirm-button  red-btn">Confirm</button>
      <div className="buy-s-lower">
        By clicking "Confirm" you acknowledge that you have accepted I have read and agree{" "}
        <span style={{ textDecoration: "underline", color: "rgba(34,131,246,1)" }}>
          Terms and conditions
        </span>
        . By entering into a trade you also acknowledge that you trade on your own accord and you
        understand the potential consequences of your actions.
      </div>
    </div>
  );
}

export default BuySellCrypto;
