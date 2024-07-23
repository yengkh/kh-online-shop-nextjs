import React from "react";
import { Card, Grid } from "@mui/joy";
import Image from "next/image";
import Image1 from "../../assets/top-product-of-the-month-images/9oRuDc-refreshed-pavilion-gaming-series-launching-next-month.png";
import Image2 from "../../assets/top-product-of-the-month-images/Android-Phone-PNG-Images.png";
import Image3 from "../../assets/top-product-of-the-month-images/Apple.png";
import Image4 from "../../assets/top-product-of-the-month-images/Mi-PNG-Isolated-HD.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import TextRowWidget from "@/app/custom-widgets/TextRowWidget";

const products = [
  {
    image: Image4,
    name: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
    stock: true,
    rating: 2,
    promotion: 1.2,
    price: 1220,
  },
  {
    image: Image1,
    name: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
    stock: true,
    rating: 3,
    promotion: 1.2,
    price: 1220,
  },
  {
    image: Image2,
    name: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
    stock: true,
    rating: 2.5,
    promotion: 1.2,
    price: 1220,
  },
  {
    image: Image4,
    name: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
    stock: false,
    rating: 0,
    promotion: 0,
    price: 1220,
  },
  {
    image: Image2,
    name: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
    stock: false,
    rating: 5,
    promotion: 1.2,
    price: 1220,
  },
  {
    image: Image4,
    name: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
    stock: true,
    rating: 2,
    promotion: 60,
    price: 1220,
  },
  {
    image: Image1,
    name: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
    stock: true,
    rating: 1,
    promotion: 0,
    price: 1220,
  },
  {
    image: Image2,
    name: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
    stock: true,
    rating: 2,
    promotion: 25.5,
    price: 1220,
  },
  {
    image: Image4,
    name: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
    stock: false,
    rating: 2,
    promotion: 70,
    price: 1220,
  },
  {
    image: Image3,
    name: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
    stock: true,
    rating: 4,
    promotion: 20,
    price: 1220,
  },
  {
    image: Image1,
    name: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
    stock: true,
    rating: 2,
    promotion: 0.2,
    price: 1220,
  },
  {
    image: Image4,
    name: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
    stock: false,
    rating: 1.5,
    promotion: 2,
    price: 1220,
  },
];

const TopProductOfTheMonth = () => {
  return (
    <div className="productofthemonth">
      <TextRowWidget title="Top Products of the month" />
      <Card>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ flexGrow: 1 }}
        >
          {products.map((_, index) => (
            <Grid xs={2} sm={4} md={3} key={index}>
              <div className="image-container">
                <p
                  className={`${
                    products[index].stock === true
                      ? "instockoutstock"
                      : "outofstock"
                  }`}
                >
                  {" "}
                  {products[index].stock === true
                    ? "In Stock"
                    : "Out of Stock"}{" "}
                </p>
                <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
                <Image
                  src={products[index].image}
                  width={250}
                  height={300}
                  alt="Image1"
                />
              </div>
              <div className="product-detail-path">
                <Stack spacing={1}>
                  <Rating
                    name="half-rating"
                    defaultValue={products[index].rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                </Stack>
                <span className="product-price">
                  Price :{" "}
                  {products[index].promotion == 0 ? (
                    <span>{products[index].price}$</span>
                  ) : (
                    <span>
                      <span className="price"> {products[index].price}$</span>
                      <span>
                        {products[index].price -
                          (products[index].price * products[index].promotion) /
                            100}
                        $
                      </span>
                    </span>
                  )}
                </span>{" "}
                <span className="promotion-style">
                  {" "}
                  {products[index].promotion == 0
                    ? ""
                    : `${products[index].promotion}% Off`}{" "}
                </span>
                <br />
                <span className="product-name"> {products[index].name} </span>
              </div>
              <br />
            </Grid>
          ))}
        </Grid>
      </Card>
    </div>
  );
};

export default TopProductOfTheMonth;
