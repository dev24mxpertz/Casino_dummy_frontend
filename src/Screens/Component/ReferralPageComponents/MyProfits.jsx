import { DownOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import DollerCoin from "../../../Assets/Image/doller-coins.png";
import { useSelector } from "react-redux";
import ReactApexChart from "react-apexcharts";

export default function MyProfits({ name, bg }) {
  const user = useSelector((state) => state.auth.user);
  const [selectedButton, setSelectedButton] = useState(0);
  // console.log(user);

  const handleClick = (index) => {
    setSelectedButton(index);
  };

  const [Profit_PriceArray, setProfit_PriceArray] = useState([]);
  const [CreatedatArray, setCreatedatArray] = useState([]);

  
  useEffect(() => {
    let total = 0;
    const newRewardPriceArray = [];
    const newCreatedAtArray = [];
    user?.myProfits?.forEach((val) => {
      total += val.Reward_Price;
      newRewardPriceArray.push(val.Profit_Price);
      newCreatedAtArray.push(val.createdAt); // Assuming createdAt is a valid property
    });
    setProfit_PriceArray(newRewardPriceArray);
    setCreatedatArray(newCreatedAtArray);
    // setTotalRewardsEarned(total);
  }, [user]);

  const seriesData = CreatedatArray.map((date, index) => ({
    x: date,
    y: Profit_PriceArray[index],
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
        text: "Profit Price",
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
          color: "#000000", // Set tooltip text color to black
        },
      },
    },
  };

  return (
    <div>
      <div className="rfrl-data" style={bg}>
        <div className="bln-box-hd">
          <p className="text-white pt-2 pb-2 font36">{name}</p>
          <p style={{ fontSize: "14px" }} className="campaigns">
            All campaigns
            <DownOutlined style={{ fontSize: "14px" }} />
          </p>
        </div>
        {user?.myProfits?.length > 0 ? (
          <ReactApexChart
            options={options}
            series={[{ data: seriesData }]}
            type="bar"
            height={350}
          />
        ) : (
          <Row className="p-2">
            <Col sm={10} md={10} xs={10} className="doller-coin">
              <img src={DollerCoin} alt="dollerCoin" />
              <p style={{ color: "rgba(255, 255, 255, 1)", fontSize: "16px" }}>
                Oops! You don´t have data to display
              </p>
            </Col>
            <Col sm={2} md={2} xs={2} className="side-box">
              <div className="side-btn">
                <Button
                  type={selectedButton === 0 ? "primary" : "default"}
                  className="btn-bg"
                  onClick={() => handleClick(0)}
                >
                  1w
                </Button>
                <Button
                  type={selectedButton === 1 ? "primary" : ""}
                  className="btn-bg"
                  onClick={() => handleClick(1)}
                >
                  1m
                </Button>
                <Button
                  type={selectedButton === 2 ? "primary" : ""}
                  className="btn-bg"
                  onClick={() => handleClick(2)}
                >
                  6m
                </Button>
                <Button
                  type={selectedButton === 3 ? "primary" : ""}
                  className="btn-bg"
                  onClick={() => handleClick(3)}
                  id="infinityFont"
                >
                  {/* <img src={infinity}/> */}∞
                </Button>
              </div>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
}
