

import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import Doller from "../../../Assets/Icon/$.png";
import personPic from "../../../Assets/Image/Ellipse 11.png";
import DollerCoin from "../../../Assets/Image/doller-coin-big.png";

export default function History() {
  const user = useSelector((state) => state.auth.user);
  const [totalRewardsEarned, setTotalRewardsEarned] = useState(0);
  const [Reward_PriceArray, setReward_PriceArray] = useState([]);
  const [CreatedatArray, setCreatedatArray] = useState([]);

  useEffect(() => {
    let total = 0;
    const newRewardPriceArray = [];
    const newCreatedAtArray = [];
    user?.myRewards?.forEach((val) => {
      total += val.Reward_Price;
      newRewardPriceArray.push(val.Reward_Price);
      newCreatedAtArray.push(val.createdAt); // Assuming createdAt is a valid property
    });
    setReward_PriceArray(newRewardPriceArray);
    setCreatedatArray(newCreatedAtArray);
    setTotalRewardsEarned(total);
  }, [user]);

  const seriesData = CreatedatArray.map((date, index) => ({
    x: date,
    y: Reward_PriceArray[index],
  }));

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd MMM",
          hour: "HH:mm",
        },
      },
    },
    yaxis: {
      title: {
        text: "Reward Price",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy HH:mm",
      },
      y: {
        formatter: function (val) {
          return "$ " + val.toFixed(2);
        },
      },
    },
    theme: {
      mode: "dark",
      tooltip: {
        style: {
          fontSize: "14px",
          // color: "#000000", // Set tooltip text color to black
        },
      },
    },
  };

  return (
    <div>
      <div className="hstry-main">
        <div className="rewards-history">
          <div className=" history-box" id="histbox">
            <div className="bln-box-hd">
              <p className="text-white pt-2 pb-2 font36">My rewards history</p>
            </div>
            {user?.myRewards?.length > 0 ? (
              <ReactApexChart
                options={options}
                series={[{ data: seriesData }]}
                type="bar"
                height={350}
              />
            ) : (
              <Row className="p-2 d-flex flex-column align-items-center">
                <Col sm={10} md={10} xs={10} className="doller-coin">
                  <img src={DollerCoin} alt="dollerCoin" />
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 1)",
                      fontSize: "16px",
                    }}
                  >
                    Oops! You don´t have data to display
                  </p>
                </Col>
              </Row>
            )}

            <div style={{ width: "100%" }}>
              <button className="view-btn">View all rewards</button>
            </div>
          </div>
        </div>
        <div className="live-rewards" id="histbox">
          <Row>
            <Col>
              <div className="history-box" id="reward-box">
                <div className="bln-box-hd">
                  <p className="text-white pt-2 pb-2 font36">
                    My rewards history
                  </p>
                </div>
                <div className="total-reward">
                  <p className="text-white-50 fs-6">
                    Total Rewards sent To-Date
                  </p>
                  <p className="text-white fs-4">${totalRewardsEarned}</p>
                </div>
                <Row className="p-2">
                  <Col>
                    <ul className="userList">
                      {user?.myRewards?.map((item, id) => (
                        <li
                          className="d-flex flex-row  justify-content-between align-items-center w-100"
                          style={{ gap: "0.5rem" }}
                          key={id}
                        >
                          <div
                            className="d-flex flex-row  justify-content-between align-items-center"
                            style={{ gap: "0.5rem" }}
                          >
                            <img
                              src={personPic}
                              alt="pic"
                              className="uperPic"
                            />
                            <p className="text-white ft-size">{user?.userID}</p>
                            <p className="text-white-50 fs-6 ft-size">
                              {item?.isClaimed ? "Claimed" : "Unclaimed"}
                            </p>
                          </div>
                          <div
                            className="d-flex flex-row  justify-content-between align-items-center"
                            style={{ gap: "0.5rem" }}
                          >
                            <img
                              src={Doller}
                              alt="dollerCoin"
                              className="uperPic"
                            />
                            <p className="text-white ft-size">
                              {item?.Reward_Price}$
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
                <div style={{ width: "100%" }}>
                  <button
                    className="view-btn"
                    style={{ background: "rgba(62, 177, 59, 1)" }}
                  >
                    Create new campaign
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
