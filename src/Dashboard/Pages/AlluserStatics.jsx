
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { All_User_Statics } from '../../store/Actions/AdminActions';

function UserDetails() {
  // AllUser_statics

  const dispatch = useDispatch()
  const AllUsers_Statics = useSelector((state) => state.admin.AllUsers_Statics);
  console.log(AllUsers_Statics);


  useEffect(() => {
    dispatch(All_User_Statics())
  }, [])

  return (
    <>
      {AllUsers_Statics?.length > 0 ? (
        <div style={{ marginTop: '20px' }} className='employee-table table-container'>
          <table className="gfg table-responsive">
            <thead className="table-transparent">
              <tr>
                <th className="th">Sr. No.</th>
                <th className="th">User</th>
                <th className="th">earned_FromStacking</th>
                <th className="th">bet_Amount</th>
              </tr>
            </thead>
            <tbody>
              {AllUsers_Statics?.map((statics, index) => (
                <tr
                  style={{
                    boxShadow:
                      "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  key={statics?._id}
                >
                  <td className="td">{index + 1}</td>
                  <td className="td">{statics?.user?.Email}</td>
                  <td className="td">{statics?.earned_FromStacking}</td>
                  <td className="td">{statics?.bet_Amount}</td>
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
    </>
  );
}

export default UserDetails
