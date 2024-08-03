import React, { useEffect, useState } from 'react';
import AvatarImage from '../../../Assets/Image/testimonialjpg.webp';
import { useSelector } from 'react-redux';

function PayOutTable() {
    const [filter, setFilter] = useState('all');
    // const [employees, setEmployees] = useState([]);

    const user = useSelector((state) => state.auth.user)
    console.log(user.myTotalPayouts);


    const employees = [
        {
            id: 1,
            date: '19:04:22',
            StakedTokens: '$154.256.235',
            Distributed: '$4.45'
        },
        {
            id: 2,
            date: '19:04:22',
            StakedTokens: '$210.125.380',
            Distributed: '$5.20'
        },
        {
            id: 3,
            date: '19:04:22',
            StakedTokens: '$176.400.000',
            Distributed: '$3.75'
        },
        {
            id: 4,
            date: '19:04:22',
            StakedTokens: '$189.500.620',
            Distributed: '$6.10'
        },
        {
            id: 5,
            date: '19:04:22',
            StakedTokens: '$245.312.175',
            Distributed: '$4.90'
        },
        {
            id: 6,
            date: '19:04:22',
            StakedTokens: '$132.850.960',
            Distributed: '$3.25'
        },
        {
            id: 7,
            date: '19:04:22',
            StakedTokens: '$188.750.000',
            Distributed: '$4.75'
        },
        {
            id: 8,
            date: '19:04:22',
            StakedTokens: '$201.015.780',
            Distributed: '$5.60'
        },
        {
            id: 9,
            date: '19:04:22',
            StakedTokens: '$160.290.400',
            Distributed: '$3.90'
        },
        {
            id: 10,
            date: '19:04:22',
            StakedTokens: '$176.420.810',
            Distributed: '$4.20'
        },
        {
            id: 11,
            date: '19:04:22',
            StakedTokens: '$132.850.960',
            Distributed: '$3.25'
        },
        {
            id: 12,
            date: '19:04:22',
            StakedTokens: '$188.750.000',
            Distributed: '$4.75'
        },
        {
            id: 13,
            date: '19:04:22',
            StakedTokens: '$201.015.780',
            Distributed: '$5.60'
        },
        {
            id: 14,
            date: '19:04:22',
            StakedTokens: '$160.290.400',
            Distributed: '$3.90'
        },
        {
            id: 15,
            date: '19:04:22',
            StakedTokens: '$176.420.810',
            Distributed: '$4.20'
        }
    ];
    



    return (
      <div>
        <div style={{ margin: "30px" }}>
          <div className="employee-table table-container">
            <center>
              <table className="gfg table-responsive">
                <thead>
                  <tr>
                    <th>
                      <div className="tableDate">Date</div>
                    </th>
                    <th>Staked Tokens</th>
                    <th>
                      <div className="tableDistrbut">Distributed</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {user?.myTotalPayouts?.map((payout) => (
                    <tr key={payout._id}>
                      <td>
                        <div className="tableDate">{payout.PayoutDate}</div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center justify-content-center gap-1 mb-1">
                          <div>
                            <img
                              className="table-icon"
                              src={require("../../../Assets/Icon/cryptocurrency-color_usdt.png")}
                              alt=""
                            />
                          </div>
                          <div>{payout.Staked_Tokens}</div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center justify-content-end gap-1 mb-1 tableDistrbut">
                          <div>
                            <img
                              className="table-icon"
                              src={require("../../../Assets/Icon/cryptocurrency-color_usdt.png")}
                              alt=""
                            />
                          </div>
                          <div>{payout.Payout_Distributed_In}</div>
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
    );
}

export default PayOutTable