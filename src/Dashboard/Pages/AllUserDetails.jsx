import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../Styles/Admincomponent.css";

const AllUserDetails = () => {
  const { user_id } = useParams();
  console.log(user_id);

  const AllUsers_list = useSelector((state) => state.admin.All_users_list);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const filteredUser = AllUsers_list.find((data) => data._id === user_id);
    setUserData(filteredUser);
  }, [AllUsers_list, user_id]);

  console.log(userData);
  return (
    <div className="col-md-12 p-2 Userdetails_main">
      {userData ? (
        <div>
          <div style={{ marginTop: '20px', marginBottom: '20px' }} className='employee-table table-container'>
            <div className="a-left">
              <table>
                <tbody>
                  <tr>
                    <td>ID:</td>
                    <td>{userData._id}</td>
                  </tr>
                  <tr>
                    <td>userID:</td>
                    <td>{userData.userID}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{userData.Email}</td>
                  </tr>
                  <tr>
                    <td>selectedCountry:</td>
                    <td>{userData.selectedCountry}</td>
                  </tr>
                  <tr>
                    <td>isVerfiedEmail:</td>
                    <td>{userData.isVerfiedEmail ? "true" : "false"}</td>
                  </tr>
                  <tr>
                    <td>referralCode:</td>
                    <td>{userData.referralCode}</td>
                  </tr>
                  <tr>
                    <td>referralLink:</td>
                    <td>{userData.referralLink}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h2>User Activity</h2>
          {userData.activity?.length > 0 ? (
            <div style={{ marginTop: '20px' }} className='employee-table table-container'>
              <table className="gfg table-responsive">
                <thead className="table-transparent">
                  <tr>
                    <th className="th">Sr. No.</th>
                    <th className="th">Tips</th>
                    <th className="th">coinDrops</th>
                    <th className="th">Rainfall</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.activity.map((activity, index) => (
                    <tr
                      style={{
                        boxShadow:
                          "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                      }}
                      key={activity._id}
                    >
                      <td className="td">{index + 1}</td>
                      <td className="td">{activity.Tips}</td>
                      <td className="td">{activity.coinDrops}</td>
                      <td className="td">{activity.Rainfall}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <>
              <div style={{ marginTop: '20px', padding: '20px', fontSize: '20px' }} className='employee-table table-container' >
                Currently there is no activity by this user
              </div>
            </>
          )}
          <br />
          <h2>User Statics</h2>
          {userData.statics?.length > 0 ? (
            <div style={{ marginTop: '20px' }} className='employee-table table-container'>
              <table className="gfg table-responsive">
                <thead className="table-transparent">
                  <tr>
                    <th className="th">Sr. No.</th>
                    <th className="th">earned_FromStacking</th>
                    <th className="th">bet_Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.statics.map((statics, index) => (
                    <tr
                      style={{
                        boxShadow:
                          "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                      }}
                      key={statics._id}
                    >
                      <td className="td">{index + 1}</td>
                      <td className="td">{statics.earned_FromStacking}</td>
                      <td className="td">{statics.bet_Amount}</td>
                      {/* <td className="td">{statics.Rainfall}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <>
              <div style={{ marginTop: '20px', padding: '20px', fontSize: '20px' }} className='employee-table table-container' >
                Currently there is no statics by this user
              </div>
            </>
          )}
          <br />
          <h2>User Rewards</h2>
          {userData?.myRewards?.length > 0 ? (
            <div style={{ marginTop: '20px' }} className='employee-table table-container'>
              <table className="gfg table-responsive">
                <thead className="table-transparent">
                  <tr>
                    <th className="th">Sr. No.</th>
                    <th className="th">Reward_Price</th>
                    <th className="th">createdAt</th>
                    <th className="th">isClaimed</th>
                  </tr>
                </thead>
                <tbody>
                  {userData?.myRewards?.map((myRewards, index) => (
                    <tr
                      style={{
                        boxShadow:
                          "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                      }}
                      key={myRewards?._id}
                    >
                      <td className="td">{index + 1}</td>
                      <td className="td">{myRewards?.Reward_Price}</td>
                      <td className="td">{myRewards?.createdAt}</td>
                      <td className="td">
                        {myRewards?.isClaimed ? "true" : "false"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <>
              <div style={{ marginTop: '20px', padding: '20px', fontSize: '20px' }} className='employee-table table-container' >
                Currently there is no Rewards by this user
              </div>
            </>
          )}
          <br />
          <h2>User TotalPayouts</h2>
          {userData?.myTotalPayouts?.length > 0 ? (
            <div style={{ marginTop: '20px' }} className='employee-table table-container'>
              <table className="gfg table-responsive">
                <thead className="table-transparent">
                  <tr>
                    <th className="th">Sr. No.</th>
                    <th className="th">Staked_Tokens</th>
                    <th className="th">Payout_Distributed_In</th>
                    <th className="th">PayoutDate</th>
                  </tr>
                </thead>
                <tbody>
                  {userData?.myTotalPayouts?.map((myTotalPayouts, index) => (
                    <tr
                      style={{
                        boxShadow:
                          "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                      }}
                      key={myTotalPayouts?._id}
                    >
                      <td className="td">{index + 1}</td>
                      <td className="td">{myTotalPayouts?.Staked_Tokens}</td>
                      <td className="td">
                        {myTotalPayouts?.Payout_Distributed_In}
                      </td>
                      <td className="td">{myTotalPayouts?.PayoutDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <>
              <div style={{ marginTop: '20px', padding: '20px', fontSize: '20px' }} className='employee-table table-container' >
                Currently there is no TotalPayouts by this user
              </div>
            </>
          )}
          <br />
          <h2>User Referrals</h2>
          {userData?.myReferrals?.length > 0 ? (
            <div style={{ marginTop: '20px' }} className='employee-table table-container'>
              <table className="gfg table-responsive">
                <thead className="table-transparent">
                  <tr>
                    <th className="th">Sr. No.</th>
                    <th className="th">Staked_Tokens</th>
                    <th className="th">Payout_Distributed_In</th>
                    <th className="th">PayoutDate</th>
                  </tr>
                </thead>
                <tbody>
                  {userData?.myReferrals?.map((myReferrals, index) => (
                    <tr
                      style={{
                        boxShadow:
                          "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                      }}
                      key={myReferrals?._id}
                    >
                      <td className="td">{index + 1}</td>
                      <td className="td">{myReferrals?.Touser}</td>
                      <td className="td">{myReferrals?.createdAt}</td>
                      <td className="td">
                        {myReferrals?.isSuccessFull ? "true" : "false"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <>
              <div style={{ marginTop: '20px', padding: '20px', fontSize: '20px' }} className='employee-table table-container' >
                Currently there is no Referrals by this user
              </div>
            </>
          )}
          {/* myBalance */}
          <br />
          <h2>User Balance </h2>
          {userData?.myBalance?.length > 0 ? (
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
                  {userData?.myBalance?.map((myBalance, index) => (
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
          {/* myPayouts */}
          <br />
          <h2>User Payouts </h2>
          {userData?.myPayouts?.length > 0 ? (
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
                  {userData?.myPayouts?.map((myPayouts, index) => (
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
                      {/* Exchange_Amount
                     */}
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
          {/* myProfits */}
          <br />
          <h2>User Profits</h2>
          {userData?.myProfits?.length > 0 ? (
            <div style={{ marginTop: '20px' }} className='employee-table table-container'>
              <table className="gfg table-responsive">
                <thead className="table-transparent">
                  <tr>
                    <th className="th">Sr. No.</th>
                    <th className="th">Profit_Price</th>
                    <th className="th">isClaimed</th>
                    <th className="th">createdAt</th>
                  </tr>
                </thead>
                <tbody>
                  {userData?.myProfits?.map((myProfits, index) => (
                    <tr
                      style={{
                        boxShadow:
                          "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                      }}
                      key={myProfits?._id}
                    >
                      <td className="td">{index + 1}</td>
                      <td className="td">{myProfits?.Profit_Price}</td>
                      <td className="td">{myProfits?.createdAt}</td>
                      <td className="td">{myProfits?.isClaimed ? ('true') : ('false')}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <>
              <div style={{ marginTop: '20px', padding: '20px', fontSize: '20px' }} className='employee-table table-container' >
                Currently there is no Profits by this user
              </div>
            </>
          )}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default AllUserDetails;
