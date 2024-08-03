import React, { useState, useEffect, useRef, useContext } from 'react';
import { DownOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Avatar, Dropdown, Menu, Modal } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import '../../Styles/UserProfile.css';
import usermedium from '../../Assets/Image/user-medium.png';
import UserModalContain from './UserModalContain';
import { useSelector } from 'react-redux';
// import UserContext from '../../Utility/UserContext';

const Userprofile = ({ handleLogout }) => {
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const navigate = useNavigate();
  // auth
  const userData =  useSelector((state) => state.auth.user);
  // const { userId, image } = useContext(UserContext);
  // const [userId, setUserId] = useState('');
  console.log(userData);
  const [image] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const Naviagteaccount = () => {
    navigate("/account");
  };

  // if (!userData) {
  //   return null; // or render loading indicator
  // }
  // const { image, userId } = userData;
  // const avatarSrc = image || '';

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get(`https://casino-backend-1.onrender.com/auth/user/${username}`);
  //       console.log(response.data);
  //       setUserId(response.data.user); // Set user data
  //       setAvatarUrl(response.data.user); // Set image URL
  //       localStorage.setItem('userData', JSON.stringify(response.data.user));
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchUserData();
  // }, [username]);

  // const url = usermedium;

  const menu = (
    <Menu className="user-dropdown">
      <div>
        <Menu.Item key="0" className="user-name">
          <Avatar
            size={{ xs: 50, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            src={<img src={userData?.image || ""} />}
          />
          <p>User -  {userData?.userID}</p>
        </Menu.Item>
        <Menu.Item key="1" className="user-drop-btn">
          <a onClick={showModal}>My profile</a>
        </Menu.Item>
        <Menu.Item key="2" className="user-drop-btn">
          <a onClick={Naviagteaccount}>Account</a>
        </Menu.Item>
        <Menu.Item key="3">
          <button className="grey-btn" onClick={handleLogout}>
            <img src={require("../../Assets/Icon/wallet-bold.png")} alt="" />
            Sign off
          </button>
        </Menu.Item>
      </div>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Link onClick={(e) => e.preventDefault()} style={{ display: "flex" }}>
          <Avatar
            style={{ backgroundColor: "#87d068", marginRight: "8px" }}
            src={<img src={userData?.image || ""} alt="avatar" />}
          />
          <DownOutlined />
        </Link>
      </Dropdown>
      <Modal
        title=""
        className="profile-modal-body"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <UserModalContain />
      </Modal>
    </>
  );
};

export default Userprofile;