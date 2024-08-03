// import React, { useState, useEffect, useRef } from 'react';
// import { Select, Space } from 'antd';
// import bitcoinImage from '../../../Assets/Icon/logos_bitcoin.png';
// import cryptoImage from '../../../Assets/Icon/cryptocurrency-color_usdt.png';
// import { Form, InputGroup } from 'react-bootstrap';

// const { Option } = Select;

// function Deposite() {
//   const defaultOption = (
//     <div>
//       <img src={bitcoinImage} alt='' style={{ marginRight: '8px' }} />
//       <p>Bit Coin</p>
//     </div>
//   );
//   const [firstDropdownValue, setFirstDropdownValue] = useState("Please Select Value");
//   const [secondDropdownValue, setSecondDropdownValue] = useState('Red');
//   const [firstOptions, setFirstOptions] = useState(["Select Value"]);
//   const [secondOptions, setSecondOptions] = useState(["Select Value"]);

//   useEffect(() => {
//     fetchFirstDropdownData().then(data => {
//       setFirstOptions(data);
//     });

//     fetchSecondDropdownData().then(data => {
//       setSecondOptions(data);
//     });
//   }, []);

//   const fetchFirstDropdownData = async () => {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve([
//           { avatar: bitcoinImage, name: 'BTC', price: '0.0000000000' },
//           { avatar: cryptoImage, name: 'USDT', price: '0.0000000000' },
//           { avatar: bitcoinImage, name: 'BTC-1', price: '0.0000000000' },
//           { avatar: cryptoImage, name: 'USDT-1', price: '0.0000000000' },
//           { avatar: bitcoinImage, name: 'BTC-2', price: '0.0000000000' },
//           { avatar: cryptoImage, name: 'USDT-2', price: '0.0000000000' },
//           { avatar: bitcoinImage, name: 'BTC-3', price: '0.0000000000' }
//         ]);
//       }, 1000);
//     });
//   };

//   const fetchSecondDropdownData = async () => {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve([
//           { avatar: bitcoinImage, name: 'BTC' },
//           { avatar: cryptoImage, name: 'BTC-y' },
//           { avatar: bitcoinImage, name: 'BTC-x' }
//         ]);
//       }, 1000);
//     });
//   };

//   const handleFirstDropdownChange = (value) => {
//     setFirstDropdownValue(value);
//   };

//   const handleSecondDropdownChange = (value) => {
//     setSecondDropdownValue(value);
//   };

//   return (
//     <div className="deposite-container">
//       <div className="deposite-dropdown-box mb-3">
//         <div className="dropdown-container">
//           <Select
//             defaultValue={firstDropdownValue}
//             onChange={handleFirstDropdownChange}
//             placeholder="Select Value"
//             className="deposite-dropdown-1"
//           >
//             {firstOptions.map(option => (
//               <Option className='first-btn-dropdown' key={option.name} value={option.name}>
//                 <div className='first-btn-dropdown'>
//                   <div>
//                     <img src={option.avatar} alt={option.name} className="avatar" style={{ marginRight: '8px' }} />
//                   </div>
//                   <div>
//                     {option.name}
//                   </div>
//                   <div>
//                     {option.price}
//                   </div>
//                 </div>
//               </Option>
//             ))}
//           </Select>
//         </div>
//         <div className="dropdown-container">
//           <Select
//             value={secondDropdownValue}
//             onChange={handleSecondDropdownChange}
//             placeholder="Select Value"
//             className="deposite-dropdown-2"
//           >
//             {secondOptions.map(option => (
//               <Option key={option.name} value={option.name}>
//                 <img src={option.avatar} alt={option.name} className="avatar" style={{ marginRight: '8px' }} />
//                 {option.name}
//               </Option>
//             ))}
//           </Select>
//           {secondDropdownValue === null && <span style={{ color: 'gray' }}>Select Value</span>}
//         </div>
//       </div >
//       <div class="relative">
//         <div className="deposite-lower">
//           <div className="deposite-lower-heading mb-3">
//             <h1>Your BTC deposit address</h1>
//           </div>
//           <div className="deposite-lower-content-1 mb-3">
//             <p>This address only accepts BTC, transfer here of any other currency or WBTC both TRC-20 and ERC-20 will result in loss of funds. Copy the BTC address here:</p>
//           </div>
//           <InputGroup className="mb-3 deposite-link-btn">
//             <Form.Control
//               aria-label=""
//               aria-describedby=""
//               defaultValue={"ajhsflowyudrflhgdws564867641slñiysujdklv"}
//               readOnly
//             />
//             <button id="" className="d-button  red-btn"><img src={require('../../../Assets/Icon/wallet-bold.png')} alt="" /></button>
//           </InputGroup>
//           <div className="deposite-lower-content-1 mb-3">
//             <p>The minimum deposit amount is 0.00005 BTC, a lower amount will not be credited or refunded. </p>
//           </div>
//           <div className="deposite-lower-content-1 mb-3">
//             <p style={{ color: '#858BAB' }}>Casino has no fee to deposit BTC. Bitcoin deposits may take some time relative to the network hash rate.</p>
//           </div>
//         </div>
//         <div class="absolute">
//           <h1>To continue select a network</h1>
//         </div>
//       </div>
//     </div >
//   );
// }
// //
// export default Deposite;
import React, { useState, useEffect } from 'react';
import { Input, Select } from 'antd';
import bitcoinImage from '../../../Assets/Icon/logos_bitcoin.png';
import cryptoImage from '../../../Assets/Icon/cryptocurrency-color_usdt.png';
import { Form, InputGroup } from 'react-bootstrap';

const { Option } = Select;

function Deposite() {
  const [firstDropdownValue, setFirstDropdownValue] = useState("Please Select Value");
  const [secondDropdownValue, setSecondDropdownValue] = useState('Red');
  const [firstOptions, setFirstOptions] = useState([]);
  const [initialFirstOptions, setInitialFirstOptions] = useState([]);
  const [secondOptions, setSecondOptions] = useState(["Select Value"]);
  const [isNetworkSelected, setIsNetworkSelected] = useState(false); // Define isNetworkSelected state

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
    setIsNetworkSelected(true);
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
      </div>
      <div className="relative">
        <div className="deposite-lower">
          <div className="deposite-lower-heading mb-3">
            <h1>Your BTC deposit address</h1>
          </div>
          <div className="deposite-lower-content-1 mb-3">
            <p>This address only accepts BTC, transfer here of any other currency or WBTC both TRC-20 and ERC-20 will result in loss of funds. Copy the BTC address here:</p>
          </div>
          <InputGroup className="mb-3 deposite-link-btn">
            <Form.Control
              aria-label=""
              aria-describedby=""
              defaultValue={"ajhsflowyudrflhgdws564867641slñiysujdklv"}
              readOnly
            />
            <button id="" className="d-button  red-btn"><img src={require('../../../Assets/Icon/wallet-bold.png')} alt="" /></button>
          </InputGroup>
          <div className="deposite-lower-content-1 mb-3">
            <p>The minimum deposit amount is 0.00005 BTC, a lower amount will not be credited or refunded. </p>
          </div>
          <div className="deposite-lower-content-1 mb-3">
            <p style={{ color: '#858BAB' }}>Casino has no fee to deposit BTC. Bitcoin deposits may take some time relative to the network hash rate.</p>
          </div>
        </div>
        {!isNetworkSelected && // Render the div only if network is not selected
          <div className="absolute">
            <h1>To continue select a network</h1>
          </div>
        }
      </div>
    </div>
  );
}

export default Deposite;


