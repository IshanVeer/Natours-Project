import React from "react";
import classes from "./NavigationBar.module.css";
import logo from "../../assets/img/logo-white.png";

const NavigationBar = () => {
    return(
        <div className={classes["header__LogoBox"]}>
    <img src={logo} className={classes.logo} alt="logo of the page" />
  </div>
    )
  
};

export default NavigationBar;
