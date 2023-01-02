import React, { Fragment } from "react";
import classes from "./Header.module.scss";
import NavigationBar from "./NavigationBar";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <NavigationBar />
        <div className={classes["header__herocontent"]}>
          <h1 className={classes["header__herocontent-heading"]}>
            <span className={classes["header__herocontent-heading--main"]}>Outdoors</span>
            <span className={classes["header__herocontent-heading--sub"]}>
              is where life happens
            </span>
          </h1>

          <a className={`${classes["header__btn"]} ${classes["header__btn--white"]} ${classes["header__btn--animated"]}`} href="/#">
            discover our tours
          </a>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
