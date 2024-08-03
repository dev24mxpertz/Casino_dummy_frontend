import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  // Initialize state with null or empty values
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState(null);
  const [image, setAvatarUrl] = useState(null);

  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUserData = localStorage.getItem('userData');
    
    if (storedUserData) {
      // If user data exists, parse and set it to state
      const { username, userId, image } = JSON.parse(storedUserData);

      setUsername(username);
      setUserId(userId);
      setAvatarUrl(image);
    }
  }, []); // Empty dependency array ensures this runs only on mount

  useEffect(() => {
    // Save user data to localStorage whenever it changes
    localStorage.setItem('userData', JSON.stringify({ username, userId, image }));
  }, [username, userId, image]); // State changes trigger this effect

  return (
    <UserContext.Provider value={{ username, setUsername, userId, setUserId, image, setAvatarUrl }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;






// import React, { useState, useEffect, useRef, useContext } from 'react';
// import { DownOutlined } from '@ant-design/icons';
// import axios from 'axios';
// import { Avatar, Dropdown, Menu, Modal } from 'antd';
// import { Link, useNavigate } from 'react-router-dom';
// import '../../Styles/UserProfile.css';
// import usermedium from '../../Assets/Image/user-medium.png';
// import UserModalContain from './UserModalContain';
// import UserContext from '../../Utility/UserContext';

// const Userprofile = ({ handleLogout }) => {
//   const [isModalVisible, setIsModalVisible] = useState(false); 
//   const navigate = useNavigate();
//   const { userData  } = useContext(UserContext);
//   // const [userId, setUserId] = useState('');
//   // const [image, setAvatarUrl] = useState('');
//   const [userId, setUserId] = useState('');
//   const [image] = useState('');

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const account = () => {
//     navigate('/account');
//   };

//   // useEffect(() => {
//   //   const fetchUserData = async () => {
//   //     try {
//   //       const response = await axios.get(`https://casino-backend-1.onrender.com/auth/user/${username}`);
//   //       console.log(response.data);
//   //       setUserId(response.data.user); // Set user data
//   //       setAvatarUrl(response.data.user); // Set image URL
//   //       localStorage.setItem('userData', JSON.stringify(response.data.user));
//   //     } catch (error) {
//   //       console.error('Error fetching user data:', error);
//   //     }
//   //   };

//   //   fetchUserData();
//   // }, [username]);

//   const url = usermedium;

//   const menu = (
//     <Menu className='user-dropdown'>
//       <div>
//         <Menu.Item key="0" className='user-name'>
//           <Avatar size={{ xs: 50, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src={<img src={image.image}  />} />
//           <p>User {}</p>
//         </Menu.Item>
//         <Menu.Item key="1" className='user-drop-btn'>
//           <a onClick={showModal}>My profile</a>
//         </Menu.Item>
//         <Menu.Item key="2" className='user-drop-btn'>
//           <a onClick={account}>Account</a>
//         </Menu.Item>
//         <Menu.Item key="3">
//           <button className='grey-btn' onClick={handleLogout}><img src={require('../../Assets/Icon/wallet-bold.png')} alt="" />Sign off</button>
//         </Menu.Item>
//       </div>
//     </Menu>
//   );

//   return (
//     <>
//       <Dropdown overlay={menu} trigger={['click']}>
//         <Link onClick={(e) => e.preventDefault()} style={{ display: 'flex' }}>
//           <Avatar style={{ backgroundColor: '#87d068', marginRight: '8px' }} src={<img src={''} alt="avatar" />} />
//           <DownOutlined />
//         </Link>
//       </Dropdown>
//       <Modal title="" className='profile-modal-body' visible={isModalVisible} onCancel={handleCancel} footer={null}>
//         <UserModalContain />
//       </Modal>
//     </>
//   );
// };

// export default Userprofile;