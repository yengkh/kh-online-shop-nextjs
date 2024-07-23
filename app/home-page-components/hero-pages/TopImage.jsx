import React from "react";
import "../../style.css";
import Image from "next/image";
import TopHeroImage from "../../assets/home_page_top_image.png";

const TopImage = () => {
  return (
    <>
      <Image src={TopHeroImage} alt="" width={1518} property="true" />
    </>
  );
};

export default TopImage;
