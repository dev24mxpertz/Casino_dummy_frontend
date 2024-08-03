import React, { useState } from 'react';
import Select from 'react-select';
import { LockOutlined, UserOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Form, Input, Modal,  } from 'antd'; // Import Modal from antd
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Register_user } from '../../store/Actions/authActions';

const countryOptions = [
    { value: 'USA', label: 'United States' },
    { value: 'CAN', label: 'Canada' },
    { value: 'GBR', label: 'United Kingdom' },
    { value: 'IND', label: 'Bharat' },
];

function SignUp() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [customMessage, setCustomMessage] = useState('');
    const [form] = Form.useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [messageText, setMessageText] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const dispatch = useDispatch()

    // useEffect(() => {
    //     const checkEmailRegistered = async () => {
    //         try {
    //             const response = await axios.get('https://casino-backend-1.onrender.com/api/check-email');
    //             if (response.data.exists) {
    //                 setErrorMessage('Email is already registered');
    //             }
    //         } catch (error) {
    //             console.error('Error checking email registration:', error);
    //         }
    //     };

    //     checkEmailRegistered();
    // }, []);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
    };

    const onFinish = async (values) => {
        try {
            const formData = {
                Email: values.username,
                password: values.password,
                selectedCountry: selectedCountry ? selectedCountry.value : '',
                ageConfirmation: customMessage !== '',
                profileImage: profileImage
            };

            dispatch(Register_user(formData))
            // const response = await axios.post('https://casino-backend-1.onrender.com/api/register', formData);
            // console.log(response.data);

            // setMessageText('User registered successfully');
            // message.success('User registered successfully');
            form.resetFields(null);
            setSelectedCountry(null);
            setCustomMessage('');
            setProfileImage(null);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message === 'Email already registered') {
                setErrorMessage('Email is already registered');
            } else {
                console.error('Error:', error);
                setErrorMessage('Email is already registered');
            }
        }
    };

    const handleCheckboxChange = (event) => {
        setIsCheckboxChecked(event.target.checked);
        if (event.target.checked) {
            setCustomMessage("You're eligible!");
        } else {
            setCustomMessage('');
        }
    };

    const [image, setImage] = useState("");

    function convertToBase64(e) {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result)
        };
        reader.onerror = error => {
            console.log("Error :", error);
        }

    }

    return (
        <div>
            <div className='signup'>
                <div className='signup-left d-none d-sm-block w-100'>
                    <img className='img-fluid' src={require('../../Assets/Image/Ragister-left-image.png')} alt="" />
                </div>
                <div className='signup-right'>
                    <div>
                        <Row className='icon-social'>
                            <Col><img className='img-fluid' src={require('../../Assets/Icon/Google button.png')} alt="" /> </Col>
                            <Col><img className='img-fluid' src={require('../../Assets/Icon/Telegram button.png')} alt="" /></Col>
                            <Col><img className='img-fluid' src={require('../../Assets/Icon/Metamask button.png')} alt="" /></Col>
                            <Col><img className='img-fluid' src={require('../../Assets/Icon/Binance button.png')} alt="" /></Col>
                            <Col><img className='img-fluid' src={require('../../Assets/Icon/Tron button.png')} alt="" /></Col>
                            <Col><img className='img-fluid' src={require('../../Assets/Icon/Coin button.png')} alt="" /></Col>
                        </Row>
                    </div>
                    <div className="row justify-content-center align-items-center mb-2">
                        <div className="col">
                            <div style={{ borderBottom: '1px solid #6efe7d' }}></div>
                        </div>
                        <div className="col-auto text-white">
                            OR
                        </div>
                        <div className="col">
                            <div style={{ borderBottom: '1px solid #6efe7d' }}></div>
                        </div>
                    </div>
                    <div>
                        <Form form={form} name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={onFinish} >

                            {/* <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Enter your Email address!', }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter your Email address" />
                            </Form.Item> */}
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your email address!'
                                    },
                                    {
                                        type: 'email',
                                        message: 'The input is not a valid email address!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter your Email address" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Enter your Password!', }]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    placeholder="Enter your Password"
                                    style={{ color: '#fff' }}
                                    autoComplete="current-password"
                                    iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                                />
                            </Form.Item>
                            <Form.Item className='country-select'>
                                <Select value={selectedCountry} placeholder={'Choose your country:'} onChange={handleCountryChange} options={countryOptions} />
                            </Form.Item>
                            <Form.Item>
                                <div style={{ color: 'white' }} className='d-flex align-items-center'>
                                    <div style={{ marginRight: '10px' }}>
                                        <input style={{ width: '30px', height: '30px' }} type="checkbox" onChange={handleCheckboxChange} />
                                    </div>
                                    <div>
                                        <p className='login-age-checkbox' style={{ margin: '0' }}>I confirm that I am 18 years old and I have read <Link href="">Service conditions</Link></p>
                                    </div>
                                </div>
                            </Form.Item>
                            {/* <Form.Item>
                                <input accept="image/" type="file" onChange={convertToBase64}>
                                
                                </input>
                                <img width={100} height={100} src={image} />
                            </Form.Item> */}
                            <Form.Item>
                                <button style={{ maxWidth: '100%', height: '55px', fontSize: '24px' }} htmlType="submit" className="green-btn w-100" disabled={!isCheckboxChecked}>
                                    <img src={require('../../Assets/Icon/wallet-bold.png')} alt="" /> Create Account
                                </button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
            {/* Display error message in a modal */}
            <Modal title="Error" visible={errorMessage !== ''} onCancel={() => setErrorMessage('')} footer={null}>
                <p>{errorMessage}</p>
            </Modal>
        </div>
    )
}

export default SignUp;
