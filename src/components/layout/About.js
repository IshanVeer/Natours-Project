import React from "react";
import classes from "./About.module.scss";
import nature1 from "../../assets/img/nat-1-large.jpg";
import nature2 from "../../assets/img/nat-2-large.jpg";
import nature3 from "../../assets/img/nat-3-large.jpg";

const About = () => {
  return (
    <section className={`${classes["about_section"]} `}>
      <div className={classes["about__heading-box"]}>
        <h2 className={classes["about__heading"]}>
          EXCITING TOURS FOR ADVENTUROUS PEOPLE
        </h2>
      </div>

      <div
        className={`${classes["about__content"]}  ${classes.grid} ${classes["grid--2-cols"]} `}
      >
        <div className={classes["about__content-text"]}>
          <h2 className={classes["about__content-text-heading"]}>
            YOU'RE GOING TO FALL IN LOVE WITH NATURE
          </h2>
          <p className={classes["about__content-text-para"]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            voluptate eveniet odio excepturi, vel magni repellat suscipit totam
            sint maxime fugit, eligendi sunt quia inventore incidunt quae ipsa
            mollitia aliquam.
          </p>
          <h2 className={classes["about__content-text-heading"]}>
            live adventures like you have never before
          </h2>
          <p className={classes["about__content-text-para"]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            voluptate eveniet odio excepturi, vel magni repellat suscipit totam
            sint maxime fugit, eligendi sunt quia inventore incidunt quae ipsa
            mollitia aliquam.
          </p>

          <a href="/#" className={classes["about__content-text-button"]}>
            Learn more {String.fromCharCode(8594)}
          </a>
        </div>
        <div className={classes["about__content-composition"]}>
          <img
            src={nature1}
            alt="valley"
            className={`${classes["about__content-composition-img"]} ${classes["p1"]}`}
          />
          <img
            src={nature2}
            alt="road"
            className={`${classes["about__content-composition-img"]} ${classes["p2"]}`}
          />
          <img
            src={nature3}
            alt="hills"
            className={`${classes["about__content-composition-img"]} ${classes["p3"]}`}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
