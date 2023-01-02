import React from "react";
import classes from "./Tours.module.scss";

const Tours = () => {
    return(
        <section className={classes["tours-section"]}>
            <h3 className={classes["tours__heading"]}>most popular tours</h3>
            <div className={classes["tours__list"]}>
                <div className={classes["tours__list-card"]}>
                    
                </div>
            </div>
        </section>
    )
};
export default Tours;