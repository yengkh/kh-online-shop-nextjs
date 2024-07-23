import React from "react";
import { Card } from "@mui/joy";
import Button from "@mui/material/Button";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Image1 from "../assets/top-product-of-the-month-images/Apple.png";
import { IconButton } from "@mui/material";

const DrawerClass = (props) => {
  return (
    <div className="cart-drawer-items">
      <h4 className="cart-drawer-items-title"> {props.title} </h4>
      <Card className="cart-product-detail">
        <Image src={Image1} alt="Image Data" height={80} />
        <div>
          <span>This is the best computer in 2024</span>
          <br />
          <span> Price : 1200$</span>
          <br />
          <div className="price-action">
            <span>Quantity : 1</span>
            <span className="price-action-button">
              <IconButton> {<FontAwesomeIcon icon={faMinus} />} </IconButton>
              <IconButton> {<FontAwesomeIcon icon={faPlus} />} </IconButton>
            </span>
          </div>

          <div className="action-button">
            <Button variant="contained">Check Out</Button>
            <Button variant="contained" color="error">
              Remove
            </Button>
          </div>
        </div>
      </Card>

      <h4 className="total-price">Total Price : 1200$</h4>
    </div>
  );
};

export default DrawerClass;
