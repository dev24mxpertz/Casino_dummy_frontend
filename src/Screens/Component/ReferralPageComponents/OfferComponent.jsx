import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Wallet from "../../../Assets/Icon/wallet-bold.png";
import offerIMG from "../../../Assets/Image/Group 39.png";

export default function OfferComponent() {
    const offerPercentage = "50%"

  return (
    <div>
         <div className='offer-box'>
                        <Row>
                            <Col md={4} className='p-0'>
                                <div className='d-flex flex-column  justify-content-between align-items-center offer-box1' style={{ width: "100%" }}>
                                    <p className="text-white font36">Special offer</p>
                                    <p className='text-warning offerpercnt' >{offerPercentage}</p>
                                    <img src={offerIMG} alt='offer' />

                                </div>
                            </Col>
                            <Col md={8} className='p-0'>
                                <div className='d-flex flex-column  align-items-center justify-content-between p-4 align-items-sm-start offer-box2'>
                                    <h1 className='text-dark text-center text-sm-start'>Exclusive Affiliate Program</h1>
                                    <p className="text-white text-center text-sm-start offer-para "> Do you a large audience and a lot of followers? Become our partner and profit with Rev Share up to 60%. Earn a percentage of the net reneuve on the referred players.
                                        Get in and let us enjoy the success together!</p>
                                    <p className="text-center text-sm-start ">First 2 months from the date of registration</p>
                                    <div className='offer-btn'>
                                        <p className='text-warning font36'>RevShare {offerPercentage}</p>
                                        <button className='prtnr-btn'><span className='wallet-img'> <img src={Wallet} alt='wallet' /></span>Become a partner</button>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </div>
    </div>
  )
}
