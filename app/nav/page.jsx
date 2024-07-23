"use client";

import "./style.css";
import * as React from "react";
import Input from "@mui/joy/Input";
import Link from "next/link";
import { SwipeableDrawer } from "@mui/material";

import DrawerClass from "./CartDrawer";
import FavoriteDrawer from "./FavoriteDrawer";
import SettingDrawer from "./SettingDrawer";
import {
  SearchOutlined,
  CaretDownOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  SettingOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  MailOutlined,
} from "@ant-design/icons";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Slide,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Hello = () => {
  const [state, setState] = React.useState({ right: false });
  const [faState, setFaState] = React.useState({ right: false });
  const [seState, seSetState] = React.useState({ right: false });
  const toggleCartDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const toggleFavoriteDrawer = (anchor, open) => (event) => {
    setFaState({ ...faState, [anchor]: open });
  };

  const toggleSettingDrawer = (anchor, open) => (event) => {
    seSetState({ ...seState, [anchor]: open });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="mian">
      <div className="top-nav">
        <Link href="/">Logo</Link>
        <div style={{ width: 300 }}>
          <Input
            placeholder="search product..."
            endDecorator={<SearchOutlined style={{ cursor: "pointer" }} />}
            fullWidth="true"
          />
        </div>
      </div>
      <br />
      <div className="seconde-nav">
        <div className="first-path">
          <ul>
            <li className="dropdown">
              <a className="dropdown-show-items">
                Product Categories <span> {<CaretDownOutlined />}</span>
              </a>
              <div className="dropdown-content">
                <a href="#">category item</a>
                <a href="#">category item</a>
                <a href="#">category item</a>
                <a href="#">category item</a>
                <a href="#">category item</a>
              </div>
            </li>
            <li>
              <Link href="new-arrival">New Arrivals</Link>
            </li>
            <li>
              <Link href="popular-products">Popular Products</Link>
            </li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
          </ul>
        </div>
        <div className="seconde-path">
          <ul>
            <li onClick={toggleFavoriteDrawer("right", true)}>
              <span>{<HeartOutlined />}</span> Favotite
            </li>
            <li onClick={toggleCartDrawer("right", true)}>
              <span>{<ShoppingCartOutlined />}</span> Cart
            </li>
            <li onClick={toggleSettingDrawer("right", true)}>
              <span> {<SettingOutlined />} </span> Setting
            </li>
            <li onClick={handleClickOpen}>
              <span>{<UserOutlined />}</span> Log In
            </li>
          </ul>
        </div>
      </div>
      {/* Cart Drawer */}
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleCartDrawer("right", false)}
        onOpen={toggleCartDrawer("right", true)}
      >
        <DrawerClass title="Your Cart" />
      </SwipeableDrawer>

      {/* Favorite Drawer */}
      <SwipeableDrawer
        anchor={"right"}
        open={faState["right"]}
        onClose={toggleFavoriteDrawer("right", false)}
        onOpen={toggleFavoriteDrawer("right", true)}
      >
        <FavoriteDrawer title="Your Favorite" />
      </SwipeableDrawer>

      {/* Setting */}
      <SwipeableDrawer
        anchor={"right"}
        open={seState["right"]}
        onClose={toggleSettingDrawer("right", false)}
        onOpen={toggleSettingDrawer("right", true)}
      >
        <SettingDrawer title="Setting" />
      </SwipeableDrawer>

      {/* Log In Dialog */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        transitionDuration={400}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>{"Log In with your account"}</DialogTitle>
        <DialogContent>
          <UserOutlined
            style={{
              fontSize: "100px",
              color: "#3fa2f6",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <br />
          <spna className="welcom-title">Welcome back </spna>
          <br />
          <br />
          <label>Email</label> <br />
          <OutlinedInput
            id="outlined-size-small"
            defaultValue=""
            size="small"
            type="email"
            fullWidth
            startAdornment={
              <InputAdornment position="start">
                {" "}
                {<MailOutlined />}{" "}
              </InputAdornment>
            }
          />
          <br />
          <br />
          <label>Password</label> <br />
          <OutlinedInput
            fullWidth
            size="small"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </IconButton>
              </InputAdornment>
            }
          />
          <br />
          <br />
          <p>
            Do not have an account?{" "}
            <span>
              {" "}
              <a href="#">Sing up</a>{" "}
            </span>{" "}
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Log In</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Hello;
