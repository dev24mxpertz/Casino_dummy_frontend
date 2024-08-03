import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Get_All_Slot_Game_Data } from "../../store/Actions/GameActions";

const AllSlot_Game = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const AllSlotGame_Data = useSelector(
    (state) => state.game.All_Slot_Game_Data
  );
  console.log(AllSlotGame_Data);

  useEffect(() => {
    dispatch(Get_All_Slot_Game_Data());
  }, [dispatch]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-CA"); // 'en-CA' format is YYYY-MM-DD
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
            {AllSlotGame_Data?.length > 0 ? (
              AllSlotGame_Data.map((AllSlotGameData, index) => (
                <tr
                  style={{
                    boxShadow:
                      "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  key={AllSlotGameData?._id}
                >
                  <td className="td">{index + 1}</td>
                  <td className="td">{AllSlotGameData?.userID?.Email}</td>
                  <td className="td">{AllSlotGameData?.bet_Amount}</td>
                  <td className="td">{AllSlotGameData?.Status}</td>
                  <td className="td">
                    {AllSlotGameData?.Loss_Amount}
                  </td>
                  <td className="td">{AllSlotGameData?.wining_amount}</td>
                  <td className="td">{AllSlotGameData?.Total_Bet_Amount}</td>
                  {/* //createdAt */}
                  {/* <td className="td">{AllSlotGameData?.createdAt}</td> */}
                  <td className="td">
                    {(AllSlotGameData?.createdAt)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No User have played the SlotGame</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSlot_Game;
