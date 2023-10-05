import React from 'react'
import "./dashboard.css";
import Avatar from "../img/Avatar-1.svg"
import Avatar_one from "../img/Avatar-2.svg";

export default function activity_feed() {
  return (
    <div>
      <div className="welcome-card bg-white">
        <h3 className="ps-3 pt-3">Activity Feed</h3>
        <hr></hr>

        <div className="d-flex ps-3">
          <div className="badge-sec">
            <img src={Avatar}></img>
          </div>
          <p className="mt-1 ms-2 fw-bold">
            Kushantha Charuka{" "}
            <span style={{ color: "#BC006D " }}>
              {" "}
              Contract #00124 need John Beige’s signature
            </span>{" "}
          </p>
        </div>
        <span class="badge bg-light ps-3 mb-4" style={{ height: "1px" }}>
          Sep 16, 2022 at 11:30 AM
        </span>
        <div>
          <div className="d-flex ps-3">
            <div className="badge-sec">
              <img src={Avatar_one} alt=""></img>
            </div>
            <p className="mt-1 ms-2 me-1">
              Lorem ipsum <span className="fw-bold">dolor sit amet,</span>{" "}
              consectetur adipiscing elit. Maecenas pretium neque
              <span className="ms-1" style={{ color: "#BC006D " }}></span>{" "}
            </p>
          </div>
          <span className="badge bg-light ps-3 mb-4" style={{ height: "1px" }}>
            Sep 16, 2022 at 11:45 AM
          </span>
        </div>

        <div>
          <div className="d-flex ps-3">
            <div className="badge-sec">
              <img src={Avatar_one} alt=""></img>
            </div>
            <p className="mt-1 ms-2 me-1">
              Lorem ipsum <span className="fw-bold">dolor sit amet,</span>{" "}
              consectetur adipiscing elit. Maecenas pretium neque
              <span className="ms-1" style={{ color: "#BC006D " }}></span>{" "}
            </p>
          </div>
          <span className="badge bg-light ps-3 mb-4" style={{ height: "1px" }}>
            Sep 16, 2022 at 11:45 AM
          </span>
        </div>
    </div>
    </div>
  );
}
