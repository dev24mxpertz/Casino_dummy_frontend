
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { All_User_Payouts } from '../../store/Actions/AdminActions';

function AlluserPayouts() {

  const dispatch = useDispatch();
  const AllUsers_Payouts = useSelector(
    (state) => state.admin.AllUsers_Payouts
  );
  console.log(AllUsers_Payouts);

  useEffect(() => {
    dispatch(All_User_Payouts());
  }, []);


  return (
    <>
      {AllUsers_Payouts?.length > 0 ? (
        <div style={{ marginTop: '20px' }} className='employee-table table-container'>
          <table className="gfg table-responsive">
            <thead className="table-transparent">
              <tr>
                <th className="th">Sr. No.</th>
                <th className="th">Payout_Distribution_In</th>
                <th className="th">Staking_Pool_Price</th>
                <th className="th">Total_Next_Payout</th>
                <th className="th">Deposit_Amount/Currency_type</th>
                <th className="th">Deposit_Amount/Deposit_Price</th>
                <th className="th">Exchange_Amount/Currency_type</th>
                <th className="th">Exchange_Amount/Deposit_Price</th>
              </tr>
            </thead>
            <tbody>
              {AllUsers_Payouts?.map((myPayouts, index) => (
                <tr
                  style={{
                    boxShadow:
                      "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  key={myPayouts?._id}
                >
                  <td className="td">{index + 1}</td>
                  <td className="td">{myPayouts?.Payout_Distribution_In}</td>
                  <td className="td">{myPayouts?.Staking_Pool_Price}</td>
                  <td className="td">{myPayouts?.Total_Next_Payout}</td>
                  <td className="td">
                    {myPayouts?.Deposit_Amount?.Currency_type}
                  </td>
                  <td className="td">
                    {myPayouts?.Deposit_Amount?.Deposit_Price}
                  </td>
                  <td className="td">
                    {myPayouts?.Exchange_Amount?.Currency_type}
                  </td>
                  <td className="td">
                    {myPayouts?.Exchange_Amount?.Exchange_Price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div style={{ marginTop: '20px', padding: '20px', fontSize: '20px' }} className='employee-table table-container' >
            Currently there is no Payouts by this user
          </div>
        </>
      )}
    </>
  );


}

export default AlluserPayouts
