import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const TextRowWidget = (props) => {
  return (
    <div className={styles.textrowstyle}>
      <h3> {props.title} </h3>
      <h3 className={styles.rightitems}>
        {" "}
        <span>see more </span>{" "}
        <span>
          {" "}
          <FontAwesomeIcon icon={faAngleRight} />{" "}
        </span>{" "}
      </h3>
    </div>
  );
};

export default TextRowWidget;
