import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import classes from "./BlogCard.module.css";

const BlogCard = ({ blog, isSlideShow = true }) => {
    const { id, img, name, description } = blog;

    return (
        <>
            {isSlideShow ? (
                <Col className="mb-4 w-100">
                    <Card className={classes.blogCard}>
                        <Card.Img
                            className={classes.blogCardImage}
                            variant="top"
                            alt={name}
                            src={img}
                        />
                        <Card.Body>
                            <Card.Title> {name}</Card.Title>
                            <Card.Text className="text-justify">
                                {description?.length > 100
                                    ? description.slice(0, 100) + "..."
                                    : description}
                            </Card.Text>
                            <Link
                                className={`${classes.blogCardButtonWrapper} pt-2`}
                                to={`/blogs/${id}`}
                            >
                                <Button className={classes.blogCardButton}>
                                    blog Details
                                    <FaArrowRight className="ms-1" />
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            ) : (
                <Col lg={4} md={6} sm={12} className="mb-4">
                    <Card className={classes.blogCard}>
                        <Card.Img
                            className={classes.blogCardImage}
                            variant="top"
                            alt={name}
                            src={img}
                        />
                        <Card.Body>
                            <Card.Title> {name}</Card.Title>
                            <Card.Text className="text-justify">
                                {description?.length > 100
                                    ? description.slice(0, 100) + "..."
                                    : description}
                            </Card.Text>
                            <Link
                                className={`${classes.blogCardButtonWrapper} pt-2`}
                                to={`/blogs/${id}`}
                            >
                                <Button className={classes.blogCardButton}>
                                    blog Details
                                    <FaArrowRight className="ms-1" />
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </>
    );
};

export default BlogCard;
