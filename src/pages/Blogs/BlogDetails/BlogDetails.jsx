import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "../../../layout/Layout";
import classes from "./BlogDetails.module.css";
import { useSelector } from "react-redux";

const BlogDetails = () => {
    const pdfRef = React.createRef();
    const { id } = useParams();
    const blogs = useSelector((state) => state.blogs.blogs);
    let blog;

    if (blogs.length) {
        blog = blogs.filter((blog) => blog._id === id);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <div>
                <Container ref={pdfRef} className="mt-4">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="mb-4">
                            <Col md={8} className="m-auto bg-white mb-4">
                                <div>
                                    <img
                                        style={{ maxWidth: "100%" }}
                                        src={blog?.length && blog[0]?.img}
                                        alt={blog?.length && blog[0]?.name}
                                    />
                                </div>
                                <div className={classes.singleBlog}>
                                    <h2 className={classes.blogTitle}>
                                        {blog?.length && blog[0]?.name}
                                    </h2>
                                    <p className={classes.blogDescription}>
                                        {blog?.length && blog[0]?.description}
                                    </p>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    );
};

export default BlogDetails;
