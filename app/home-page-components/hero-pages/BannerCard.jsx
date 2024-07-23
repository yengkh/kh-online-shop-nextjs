import React from "react";
import BannerCartItem from "./BannerCartItem";
import { Divider } from "@mui/joy";
import {
  faTruckFast,
  faComments,
  faArrowRotateLeft,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const BannerCard = () => {
  return (
    <div className="banner-card">
      <BannerCartItem
        title={"Free shipping"}
        content={"When you spend $80 or more"}
        icon={faTruckFast}
      />
      <Divider orientation="vertical" />
      <BannerCartItem
        title={"We are available 24/7"}
        content={"Need help? contact us anytime"}
        icon={faComments}
      />
      <Divider orientation="vertical" />
      <BannerCartItem
        title={"Satisfied or return"}
        content={"Easy 30-day return policy"}
        icon={faArrowRotateLeft}
      />
      <Divider orientation="vertical" />
      <BannerCartItem
        title={"100% secure payments"}
        content={"Visa, Mastercard, Stripe, PayPal"}
        icon={faCreditCard}
      />
    </div>
  );
};

export default BannerCard;
