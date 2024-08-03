import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Get_AllSubscribers } from '../../store/Actions/AdminActions';

function Subscriber() {

  const dispatch = useDispatch()

  const AllSubscribers = useSelector((state) => state.admin.AllSubscribers);
  console.log(AllSubscribers);

  useEffect(() => {
    dispatch(Get_AllSubscribers());
  }, []);

  return (
    <>
      {AllSubscribers?.length > 0 ? (
        <div
          style={{ marginTop: "20px" }}
          className="employee-table table-container"
        >
          <table className="gfg table-responsive">
            <thead className="table-transparent">
              <tr>
                <th className="th">Sr. No.</th>
                <th className="th">email</th>
              </tr>
            </thead>
            <tbody>
              {AllSubscribers?.map((subscriber, index) => (
                <tr
                  style={{
                    boxShadow:
                      "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  key={subscriber?._id}
                >
                  <td className="td">{index + 1}</td>
                  <td className="td">{subscriber?.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div
            style={{ marginTop: "20px", padding: "20px", fontSize: "20px" }}
            className="employee-table table-container"
          >
            Currently there is no subscriber by this user
          </div>
        </>
      )}
    </>
  );
}

export default Subscriber
