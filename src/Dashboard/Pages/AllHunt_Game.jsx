import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Get_All_Hunt_Game_Data } from "../../store/Actions/GameActions";

const AllHunt_Game = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const AllHuntGame_Data = useSelector(
    (state) => state.game.All_Hunt_Game_Data
  );
  console.log(AllHuntGame_Data);

  useEffect(() => {
    dispatch(Get_All_Hunt_Game_Data());
  }, [dispatch]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-CA");
  };

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
            {AllHuntGame_Data?.length > 0 ? (
              AllHuntGame_Data.map((AllHuntGameData, index) => (
                <tr
                  style={{
                    boxShadow:
                      "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  key={AllHuntGameData?._id}
                >
                  <td className="td">{index + 1}</td>
                  <td className="td">{AllHuntGameData?.userID?.Email}</td>
                  <td className="td">{AllHuntGameData?.bet_Amount}</td>
                  <td className="td">{AllHuntGameData?.Status}</td>
                  <td className="td">{AllHuntGameData?.Loss_Amount}</td>
                  <td className="td">{AllHuntGameData?.wining_amount}</td>
                  <td className="td">{AllHuntGameData?.Total_Bet_Amount}</td>
                  <td className="td">{AllHuntGameData?.createdAt}</td>
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

export default AllHunt_Game;
