import React, { useEffect, useState } from "react";
import { Radio } from "antd";
import AvatarImage from "../../Assets/Image/testimonialjpg.webp"; // Import Avatar Image
import { useDispatch, useSelector } from "react-redux";
import { Get_All_Game_Data } from "../../store/Actions/GameActions";

function Casinosection2() {
  const [filter, setFilter] = useState("all");
  const [employees, setEmployees] = useState([]);

  const simulatedData = useSelector((state) => state.game.All_Game_Data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Get_All_Game_Data());
  }, [dispatch]);

  console.log(simulatedData, "---------------------------simulatedData");

  useEffect(() => {
    document.getElementById(filter).classList.add("active");
    filterData(filter);
  }, [filter]);

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const filterData = (filter) => {
    if (filter === "all") {
      setEmployees(simulatedData);
    } else {
      const filteredEmployees = simulatedData.filter(
        (employee) => employee?.Game?.toLowerCase() === filter?.toLowerCase()
      );
      setEmployees(filteredEmployees);
    }
  };

  return (
    <>
      <div className="Casinosection2">
        <div className="d-flex justify-content-center w-100">
          <Radio.Group
            defaultValue="all"
            buttonStyle="solid"
            className="filter-btns"
          >
            <div className="row w-100">
              <div className="casino-radio-group col-md-4 col-12">
                <Radio.Button
                  value="all"
                  id="all"
                  style={{
                    maxWidth: "200px",
                    height: "55px",
                    borderInlineStart: "none",
                    display: "flex",
                  }}
                  className={`casino-mobile-btn blue-btn ${
                    filter === "all" ? "radio-active" : ""
                  }`}
                  onClick={() => handleFilterChange("all")}
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      className="radio-icon"
                      src={require("../../Assets/Icon/All-bet-logo.png")}
                      alt=""
                    />
                    <h6 className="radio-test">All bets</h6>
                  </div>
                </Radio.Button>
              </div>
              <div className="casino-radio-group col-md-4 col-12">
                <Radio.Button
                  value="Slot"
                  id="Slot"
                  style={{
                    maxWidth: "200px",
                    height: "55px",
                    borderInlineStart: "none",
                    display: "flex",
                  }}
                  className={`casino-mobile-btn blue-btn ${
                    filter === "Slot" ? "radio-active" : ""
                  }`}
                  onClick={() => handleFilterChange("Slot")}
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      className="radio-icon"
                      src={require("../../Assets/Icon/Big-bet-logo.png")}
                      alt=""
                    />
                    <h6 className="radio-test">Big bets</h6>
                  </div>
                </Radio.Button>
              </div>
              <div className="casino-radio-group col-md-4 col-12">
                <Radio.Button
                  value="Roulette"
                  id="Roulette"
                  style={{
                    maxWidth: "200px",
                    height: "55px",
                    borderInlineStart: "none",
                    display: "flex",
                  }}
                  className={`casino-mobile-btn blue-btn ${
                    filter === "Roulette" ? "radio-active" : ""
                  }`}
                  onClick={() => handleFilterChange("Roulette")}
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      className="radio-icon"
                      src={require("../../Assets/Icon/card-logo.png")}
                      alt=""
                    />
                    <h6 className="radio-test">Rare victories</h6>
                  </div>
                </Radio.Button>
              </div>
            </div>
          </Radio.Group>
        </div>
        <div style={{ margin: "30px" }}>
          <div className="employee-table table-container">
            <center>
              <table className="gfg table-responsive">
                <thead>
                  <tr>
                    <th>Game</th>
                    <th>Time</th>
                    <th>User</th>
                    <th>Bet Amount</th>
                    {/* <th>Multiplier</th> */}
                    <th>Wining Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {employees?.map((employee) => (
                    <tr key={employee?.id}>
                      <td>
                        <div
                          className="d-flex align-items-center gap-1 mb-1"
                          style={{ marginLeft: "50px" }}
                        >
                          <div>
                            <img
                              className="table-icon"
                              src={require("../../Assets/Icon/slot-machine.png")}
                              alt=""
                            />
                          </div>
                          <div>{employee?.Game_name}</div>
                        </div>
                      </td>
                      <td>{employee?.createdAt}</td>
                      <td>
                        <div
                          className="d-flex align-items-center gap-1 mb-1"
                          style={{ marginLeft: "180px" }}
                        >
                          <div>
                            {/* <img
                                src={employee.Avatar}
                                alt="avatar"
                                style={{ borderRadius: "50%" }}
                                className="table-icon"
                              /> */}
                          </div>
                          <div>{employee?.userID?.Email}</div>
                        </div>
                      </td>
                      <td>
                        <div
                          className="d-flex align-items-center gap-1 mb-1"
                          style={{ marginLeft: "50px" }}
                        >
                          <div>
                            <img
                              className="table-icon"
                              src={require("../../Assets/Icon/cryptocurrency-color_usdt.png")}
                              alt=""
                            />
                          </div>
                          <div>{employee?.bet_Amount}</div>
                        </div>
                      </td>
                      {/* <td>{employee.Multiplier}</td> */}
                      <td>
                        <div
                          className="d-flex align-items-center gap-1 mb-1"
                          style={{ marginLeft: "50px" }}
                        >
                          <div>
                            <img
                              className="table-icon"
                              src={require("../../Assets/Icon/cryptocurrency-color_usdt.png")}
                              alt=""
                            />
                          </div>
                          <div>{employee?.wining_amount || 0}</div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Casinosection2;
