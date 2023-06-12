import React from "react";
import "./index.css";
import SocialMediaLinks from "../Social media";

const Footer = () => {
  return (
    <footer className="footer">
     
      <div className="logo">
      <SocialMediaLinks></SocialMediaLinks>
        <p style={{ color: "grey" }}>
          CNC delivers customized IT solutions to meet the diverse needs of
          global organizations, ensuring comprehensive coverage of their unique
          requirements.
        </p>
      </div>
      <hr />
      <div className="logo">
        <h2> Quick Menu </h2>
        <ul className="list">
          {/* <Link style={{ textDecoration: "none" }} to="srikanth"> */}
          <a href="srikanth" className="list-item">
            <li>Srikanth</li>
          </a>
          {/* </Link> */}
          {/* <Link style={{ textDecoration: "none" }} to="venu"> */}
          <a href="venu" className="list-item">
            <li>Venu</li>
          </a>
          {/* </Link> */}
          {/* <Link style={{ textDecoration: "none" }}> */}
          <a href="madhavi" className="list-item">
            <li>Madhavi</li>
          </a>
          {/* </Link> */}
          {/* <Link style={{ textDecoration: "none" }}> */}
          <a href="Naga" className="list-item">
            <li>Naga</li>
          </a>
          {/* </Link> */}
        </ul>
      </div>
      <hr />
      <div className="logo">
        <h2 style={{ color: "white" }}> Contact </h2>
        <p style={{ color: "grey" }}>
          1234 Dallas Parkway, Suite 100, Frisco, TX 75034
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            color: "grey",
          }}
        >
          <p> 000000000000000 </p>
          <p> 111111111111111 </p>
          <p> 222222222222222 </p>
        </div>
      </div>
      <hr />
    </footer>
  );
};

export default Footer;
