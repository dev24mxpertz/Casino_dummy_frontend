import { PaperClipOutlined } from '@ant-design/icons';
import React from 'react';

export default function ReferralLink({ link,typeOfLink}) {
    return (
      <div>
        <div
          className="d-flex flex-row p-2 justify-content-between custom-boader"
          style={{ gap: "2%", margin: "1% 0" }}
        >
          <PaperClipOutlined
            className="text-white para"
            style={{ width: "4%" }}
          />
          <div className="withCal" style={{ width: "68%" }}>
            <p
              className="text-secondary"
              style={{
                fontSize: "14px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Your referral {typeOfLink}
            </p>
            <p className="text-white lnk">{link}</p>
          </div>
          <div className="copy-btn" style={{ width: "28%" }}>
            <div id="button-addon2">
              <button className="red-btn">
                <img
                  src={require("../../../Assets/Icon/copyIcon.png")}
                  alt=""
                />
                <span className="hide-text">Copy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
