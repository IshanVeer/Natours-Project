import React from "react";
import classes from "./Features.module.scss";
import {
  IoGlobeOutline,
  IoNavigateOutline,
  IoMapOutline,
  IoHeartOutline,
} from "react-icons/io5";

const Features = () => {
  return (
    <section className={classes["features-section"]}>
      <div className={`${classes["features-list"]} ${classes.grid} ${classes["grid--4-cols"]}`}>
        {/* Card 1 */}
        <div className={classes["features-list-card"]}>
          <IoGlobeOutline className={classes["features-list-card-icon"]} />

          <h3 className={classes["features-list-card-heading"]}>
            explore the world
          </h3>
          <p className={classes["features-list-card-para"]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            voluptate eveniet odio excepturi.
          </p>
        </div>
        {/* Card 2 */}
        <div className={classes["features-list-card"]}>
          <IoNavigateOutline className={classes["features-list-card-icon"]} />
          <h3 className={classes["features-list-card-heading"]}>
            meet nature
          </h3>
          <p className={classes["features-list-card-para"]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            voluptate eveniet odio excepturi.
          </p>
        </div>
        {/* Card 3 */}
        <div className={classes["features-list-card"]}>
          <IoMapOutline className={classes["features-list-card-icon"]} />
          <h3 className={classes["features-list-card-heading"]}>
            find your way
          </h3>
          <p className={classes["features-list-card-para"]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            voluptate eveniet odio excepturi.
          </p>
        </div>
        {/* Card 4 */}
        <div className={classes["features-list-card"]}>
          <IoHeartOutline className={classes["features-list-card-icon"]} />
          <h3 className={classes["features-list-card-heading"]}>
            live a healthier life
          </h3>
          <p className={classes["features-list-card-para"]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            voluptate eveniet odio excepturi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
