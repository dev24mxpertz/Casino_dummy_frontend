    import React, { useState } from 'react';
    import axios from 'axios';
    import '../../Styles/Footer.css'
    import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
    import Mobilefooter from '../Pages/mobile-screen/Mobile-footer';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Make_user_Subscribe } from '../../store/Actions/AdminActions';

    function Footer() {

        const dispatch = useDispatch()
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault(); // Prevent default form submission
            console.log(email)
            dispatch(Make_user_Subscribe({Email:email}))
            setEmail('');
        };
        return (
            <div className='Footer p-5'>
                <div className='d-none d-md-block'>
                    <Container fluid>
                        <Row>
                            <Col xs={6} md={3}>
                                <h3>Casino</h3>
                            </Col>
                            <Col xs={6} md={3}>
                                <h3>Company</h3>
                                <p>Home</p>
                                <p>Slots</p>
                                <p>Tournament</p>
                                <p>Jackpots</p>
                                <p>Live Games</p>
                            </Col>
                            <Col xs={6} md={3}>
                                <h3>Support</h3>
                                <p>Faqs</p>
                                <p>Support</p>
                            </Col>
                            <Col xs={6} md={3}>
                                <h3>Subscribe</h3>
                                <p>Subscribe to our newsletter and receive our updates directly in your email</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className=''>
                    <Container fluid>
                        <Row>
                            <Col xs={12} md={6}>
                                <h2>Follow Us</h2>
                                <div className='social-icon'>
                                    <Link><img src={require('../../Assets/Image/Facebook.png')} alt="Facebook" /></Link>
                                    <Link><img src={require('../../Assets/Image/Instagram.png')} alt="Instagram" /></Link>
                                    <Link><img src={require('../../Assets/Image/Linkedin.png')} alt="LinkedIn" /></Link>
                                    <Link><img src={require('../../Assets/Image/x.png')} alt="Unknown" /></Link>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form onSubmit={handleSubmit}>
                                    <InputGroup className="mb-3 subscribe">
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your Email address"
                                            aria-label="Enter your Email address"
                                            aria-describedby="basic-addon2"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <button type="submit" id="button-addon2" className="subscribe-button  red-btn">Subscribe</button>
                                    </InputGroup>
                                </Form>
                                {message && <p className={`message ${message.includes('success') ? 'subscribe-success-message' : 'subscribe-error-message'}`}>{message}</p>}
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="d-block d-md-none">
                    <Mobilefooter />
                </div>
                <div className='pt-2 mobile-footer-lower'>
                    <Container fluid>
                        <Row className=''>
                            <Col xs={4} md={3}>
                                <h6 className='mobile-footer-lower'>Affiliate program</h6>
                            </Col>
                            <Col xs={4} md={3}>
                                <h6 className='mobile-footer-lower'>Terms & Conditions</h6>
                            </Col>
                            <Col xs={4} md={3}>
                                <h6 className='mobile-footer-lower'>Bonus Terms & Conditions</h6>
                            </Col>
                            <Col xs={12} md={3}>
                                <p className='mobile-footer-lower'>Copyright© 2023, SportOdds-All Right Reserved</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }   

    export default Footer;
