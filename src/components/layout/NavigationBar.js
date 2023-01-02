import React from "react";
import classes from "./NavigationBar.module.scss";
import logo from "../../assets/img/logo-white.png";

const NavigationBar = () => {
    return(
        <div className={classes["header__Logo-box"]}>
    <img src={logo} className={classes.logo} alt="logo of the page" />
  </div>
    )
  
};

export default NavigationBar;
