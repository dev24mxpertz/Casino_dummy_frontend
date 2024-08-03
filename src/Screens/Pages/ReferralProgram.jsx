import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "../../Styles/ReferralProgram.css";
import History from '../Component/ReferralPageComponents/History';
import MyBalance from '../Component/ReferralPageComponents/MyBalance';
import MyReferrals from '../Component/ReferralPageComponents/MyReferrals';
import OfferComponent from '../Component/ReferralPageComponents/OfferComponent';
import ReferralCampaign from '../Component/ReferralPageComponents/ReferralCampaign';
import ReferralNav from '../Component/ReferralPageComponents/ReferralNav';
import MyProfits from '../Component/ReferralPageComponents/MyProfits';

export default function ReferralProgram() {

    const MyReferralsBg = { background: "linear-gradient(109.54deg, #2283F6 -2.33%, #0D131C 102.39%)" };
    const MyProfitBg = { background: "linear-gradient(154.74deg, #3EB13B -50.28%, rgba(62, 177, 59, 0) 98.71%)" }
    

    return (
      <div className="bg-rfrl">
        <h1 className="hd">Referral program</h1>
        <ReferralNav />
        <div className="main-div">
          <ReferralCampaign />
          <MyBalance />
          <section className="My-Referrals">
            <div className="rfrl-box">
              <Row className="d-flex flex-row  justify-content-between align-items-center ">
                <Col md={6} className="box-1">
                  <MyReferrals name="My referrals" bg={MyReferralsBg} />
                </Col>
                <Col md={6} className="box-1">
                  <MyProfits name="My profit" bg={MyProfitBg} />
                </Col>
              </Row>
            </div>
          </section>
          <History />
          <OfferComponent />
        </div>
      </div>
    );
}

