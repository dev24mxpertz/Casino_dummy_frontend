
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { All_User_Balance } from '../../store/Actions/AdminActions';

function Payment() {


  const dispatch = useDispatch();
  const AllUsers_Balance = useSelector((state) => state.admin.AllUsers_Balance);
  console.log(AllUsers_Balance);

  useEffect(() => {
    dispatch(All_User_Balance());
  }, []);


  return (
    <>
      {AllUsers_Balance?.length > 0 ? (
        <div style={{ marginTop: '20px' }} className='employee-table table-container'>
          <table className="gfg table-responsive">
            <thead className="table-transparent">
              <tr>
                <th className="th">Sr. No.</th>
                <th className="th">Commission_Rewards</th>
                <th className="th">Crypto_Staking_Rewards</th>
                <th className="th">Referral_bonus/Available_Balance</th>
                <th className="th">Referral_bonus/Locked_Balance</th>
              </tr>
            </thead>
            <tbody>
              {AllUsers_Balance?.map((myBalance, index) => (
                <tr
                  style={{
                    boxShadow:
                      "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  key={myBalance?._id}
                >
                  <td className="td">{index + 1}</td>
                  <td className="td">{myBalance?.Commission_Rewards}</td>
                  <td className="td">{myBalance?.Crypto_Staking_Rewards}</td>
                  <td className="td">
                    {myBalance?.Referral_bonus?.Available_Balance}
                  </td>
                  <td className="td">
                    {myBalance?.Referral_bonus?.Locked_Balance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div style={{ marginTop: '20px', padding: '20px', fontSize: '20px' }} className='employee-table table-container' >
            Currently there is no Balance by this user
          </div>
        </>
      )}
    </>
  );
}

export default Payment
