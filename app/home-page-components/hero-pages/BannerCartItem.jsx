import React from "react";
import "../../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BannerCartItem = ({ title, content, icon }) => {
  return (
    <div className="banner-card-item">
      <FontAwesomeIcon
        icon={icon}
        className="fas fa-check"
        style={{
          color: "#3FA2F6",
          fontSize: "25px",
        }}
      />
      <div>
        <span className="banner-card-item-title"> {title} </span>
        <br />
        <span className="banner-card-item-context"> {content} </span>
      </div>
    </div>
  );
};

export default BannerCartItem;
