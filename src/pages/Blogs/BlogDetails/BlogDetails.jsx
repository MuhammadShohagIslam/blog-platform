import React, { useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Layout from "../../../layout/Layout";
import classes from "./BlogDetails.module.css";

const BlogDetails = () => {
    const pdfRef = React.createRef();
    const { id } = useParams();
    const { data, loading } = useFetch(
        "https://course-server-delta.vercel.app/courses",
        id
    );
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { img, name, description, intro, overview } = data;
    return (
        <Layout>
            {loading ? (
                <div
                    style={{ height: "400px" }}
                    className="d-flex justify-content-center align-items-center"
                >
                    <Spinner animation="border" variant="info" />
                </div>
            ) : (
                <div>
                    <Container ref={pdfRef} className="mt-4">
                        <Row>
                            <Col lg={12} md={12} sm={12} className="mb-4">
                                <Col md={8} className="m-auto bg-white mb-4">
                                    <div className={classes.singleBlog}>
                                        <h2 className={classes.blogTitle}>
                                            {name}
                                        </h2>
                                        <p className={classes.blogDescription}>
                                            {description}
                                        </p>
                                    </div>
                                </Col>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </Layout>
    );
};

export default BlogDetails;
