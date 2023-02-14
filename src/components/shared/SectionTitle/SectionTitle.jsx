import React from "react";
import classes from "./SectionTitle.module.css";

const SectionTitle = ({ title, description, paddingStyle }) => {
    return (
        <div style={{ paddingTop: `${paddingStyle ? paddingStyle : 50}px` }}>
            <h2 className={classes.sectionTitle}>{title}</h2>
            <p className={classes.sectionDescription}>{description}</p>
        </div>
    );
};

export default SectionTitle;
