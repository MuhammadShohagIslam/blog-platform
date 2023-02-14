import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Jumbotron.module.css";
import { FaFilePdf } from "react-icons/fa";
import Pdf from "react-to-pdf";

const Jumbotron = ({ name, intro, pdfRef }) => {
    return (
        <section className={intro ? `${classes.jumbotron} ${classes.jumbotronIntro}` : classes.jumbotron}>
            <Container className={classes.jumbotronWrapper}>
                <div className="headerInfo">
                    <h2 className={classes.jumbotronTitle}>
                        {name}
                        {intro && (
                            <Pdf targetRef={pdfRef} filename="course-details.pdf" >
                                {({ toPdf }) => (
                                    <FaFilePdf
                                        onClick={toPdf}
                                        className={classes.downloadPdf}
                                    />
                                )}
                            </Pdf>
                        )}
                    </h2>
                    {intro && (
                        <p className={classes.jumbotronDescription}>{intro}</p>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Jumbotron;
