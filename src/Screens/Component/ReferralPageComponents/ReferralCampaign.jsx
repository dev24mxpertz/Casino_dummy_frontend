
import {
    ShareAltOutlined
} from '@ant-design/icons';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CheckIcon from "../../../Assets/Image/iconsCheck-box.png";
import Person from "../../../Assets/Image/person.png";
import Profit from "../../../Assets/Image/profit.png";
import queIcon from "../../../Assets/Icon/que.png";
import Sound from "../../../Assets/Image/sound.png";
import ReferralLink from './ReferralLink';
import { useSelector } from 'react-redux';


export default function ReferralCampaign() {

    const totalProfit = 0
    const bonus =1500 
    const commissionsPercentage = 30
    const totalReferrals = 0
    const personalComission = 100
    const referralShare =0

      const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <div className="referral-campaign">
        <Row className="d-flex flex-row  justify-content-between box-gap">
          <Col md={6}>
            <div className="profit-box">
              <div
                className="d-flex flex-row p-2 justify-content-between align-items-center"
                style={{ gap: "10px" }}
              >
                <img src={Profit} alt="Profit" className="p-2" />
                <div>
                  <p className="text-white para top-hd">
                    My total profit:
                    <span>
                      <img src={queIcon} alt="" style={{ padding: "5px" }} />
                    </span>{" "}
                  </p>
                  <p className="text-white para top-hd">${totalProfit} </p>
                </div>
              </div>
              <div
                className="d-flex flex-row p-2 justify-content-between align-items-center"
                style={{ gap: "10px" }}
              >
                <img src={Person} alt="Person" className="p-2" />
                <div>
                  <p className="text-white para top-hd">
                    Total referrals{" "}
                    <span>
                      <img src={queIcon} alt="" style={{ padding: "5px" }} />
                    </span>
                  </p>
                  <p className="text-white para top-hd">${totalReferrals} </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="invite-box">
              <h6 className="text-white para invite">
                INVITE NEW USERS TO GET
              </h6>
              <p className="text-white para fontInvite">
                <span>
                  <img src={CheckIcon} alt="check" />
                </span>{" "}
                ${bonus} Bonus per referral
              </p>
              <p className="text-white para fontInvite">
                <span>
                  <img src={CheckIcon} alt="check" />
                </span>
                Up to {commissionsPercentage}% commissions from users activity
              </p>
              <div className="sound-img">
                <img src={Sound} alt="icon" style={{ width: "100%" }} />
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <p className="text-white pt-4 pb-4 para ">My referral campaign</p>
          <Row className="d-flex flex-row  justify-content-between">
            <Col md={6}>
              <ReferralLink link={user.referralLink} typeOfLink="Link" />
            </Col>
            <Col md={6}>
              <ReferralLink link={user.referralCode} typeOfLink='Code' />
            </Col>
          </Row>
        </div>
        <div>
          <div className="d-flex flex-column  justify-content-between pt-4 pb-4 flex-md-row">
            <div className=" d-flex flex-column  justify-content-between flex-md-row  align-items-center">
              <div className="divider">
                <p className="text-secondary">
                  Your commissions:
                  <span className="text-white ">{personalComission}%</span>
                </p>
              </div>

              <p className="text-secondary">
                Shares for referrals:
                <span className="text-white ">{referralShare}</span>
              </p>
            </div>
            <div className="share-box">
              <button className="share-btn displytxt">Share via socials</button>
              <button className="share-btn displyicon ">
                {" "}
                <ShareAltOutlined />
              </button>
              <div style={{ width: "249px" }}>
                <button className="Green-btn " id="btn-width">
                  Create new campaign
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
