import React, { useRef } from 'react';
import { Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Image_Uploader } from '../../../store/Actions/authActions';
// import UserContext from '../../../Utility/UserContext';

function AccountSection1() {
  // const [userId, setUserId] = useState('');
  // const [newimage, setAvatarUrl] = useState('');
  const fileInputRef = useRef(null);
  const dispatch = useDispatch()

  const userData = useSelector((state) => state.auth.user)
console.log(userData);



  // const { userId, image } = useContext(UserContext);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get(`https://casino-backend-1.onrender.com/auth/user/${username}`);
  //       console.log(response.data);
  //       setUserId(response.data.user);
  //       setAvatarUrl(response.data.user); 
  //       localStorage.setItem('userData', JSON.stringify(response.data.user));
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchUserData();
  // }, [username]); 


  // const handleChangeAvatar = (event) => {
  //   const selectedFile = event.target.files[0];
  //   if (selectedFile) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setAvatarUrl(reader.result);
  //     };
  //     reader.readAsDataURL(selectedFile);
  //   }
  // };

  // useEffect(() => {
  //   // Retrieve user data from localStorage on component mount
  //   const storedUserData = localStorage.getItem('userData');
  //   if (storedUserData) {
  //     const parsedUserData = JSON.parse(storedUserData);
  //     setUserId(parsedUserData);
  //     setAvatarUrl(parsedUserData);
  //   }
  // }, []);

  const handleChangeAvatar = async (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
        const Data = {
          user_id: userData._id,
          image: selectedFile,
        };
  
      try {
       await dispatch(Image_Uploader(Data));
       window.location.reload();
      } catch (error) {
        console.error('Error updating user image:', error);
      }
    }
  };  
  
  
  

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='container-fluid black-bg p-0 m-0'>
      <div className='account-container'>
        <div className='account-card-blue-left'>
          <h1>My account</h1>
          <div className='d-flex align-items-end mt-3'>
            <Avatar src={userData?.image || ''} size={80} />
            <div className='ms-3'>
              <p>User  -  {userData.userID}</p>
              <input
                type='file'
                accept='image/*'
                onChange={handleChangeAvatar}
                style={{ display: 'none' }}
                ref={fileInputRef}
              />
              <Button type='link' onClick={handleButtonClick}>Change</Button>
            </div>
          </div>
        </div>
        <div className='account-card-blue-right'>
          <div className='d-flex align-items-center'>
            <img className='img-fluid account-s1-right' src={require('../../../Assets/Image/money-big.png')} alt="" />
            <div>
              <h1>My Cashback:</h1>
              <span>5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSection1;

