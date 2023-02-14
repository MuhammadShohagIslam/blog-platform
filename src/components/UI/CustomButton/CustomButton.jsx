import React from "react";
import { Link } from "react-router-dom";
import classes from "./CustomButton.module.css";
import { Button } from 'react-bootstrap';

const CustomButton = ({id}) => {
    return (
        <>
            <Link
                to={`/courses/cart/${id}`}
                className={`${classes.buttonWrapper} pt-2`}
            >
                <Button className={classes.customButton}>
                    Get Premium Access
                </Button>
            </Link>
        </>
    );
};

export default CustomButton;
