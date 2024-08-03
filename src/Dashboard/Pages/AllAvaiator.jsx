import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Get_All_Aviator_Game_Data } from "../../store/Actions/GameActions";

const AllAvaiator = () => {
  const dispatch = useDispatch();
  //   const user = useSelector((state) => state.auth.user);
  const All_Aviator_Game_Data = useSelector(
    (state) => state.game.All_Aviator_Game_Data
  );

  console.log(
    "--------------------------------All_Aviator_Game_Data",
    All_Aviator_Game_Data
  );
  useEffect(() => {
    dispatch(Get_All_Aviator_Game_Data());
  }, []);

  return (
    <div className="Casinosection2">
      <div
        style={{ marginTop: "20px" }}
        className="employee-table table-container"
      >
        <table className="gfg table-responsive">
          <thead className="table-transparent">
            <tr>
              <th>Sr. No.</th>
              <th>user Email</th>
              <th>bet_Amount</th>
              <th>Status</th>
              <th>Loss_Amount</th>
              <th>wining_amount</th>
              <th>Total_Wallet_Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {All_Aviator_Game_Data?.length > 0 ? (
              All_Aviator_Game_Data.map((AllAviatorGameData, index) => (
                <tr
                  style={{
                    boxShadow:
                      "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  key={AllAviatorGameData?._id}
                >
                  <td className="td">{index + 1}</td>
                  <td className="td">{AllAviatorGameData?.userID?.Email}</td>
                  <td className="td">{AllAviatorGameData?.bet_Amount}</td>
                  <td className="td">{AllAviatorGameData?.Status}</td>
                  <td className="td">{AllAviatorGameData?.Loss_Amount}</td>
                  <td className="td">{AllAviatorGameData?.wining_amount}</td>
                  <td className="td">{AllAviatorGameData?.Total_Bet_Amount}</td>
                  <td className="td">{AllAviatorGameData?.createdAt}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No User have played the AviatorGame</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAvaiator;
