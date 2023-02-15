import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import classes from "./BlogCard.module.css";
import { useDispatch } from "react-redux";
import blogRemovedData from "../../../redux/middlewares/thunk/blog/blogRemoved";
import { toast } from "react-hot-toast";

const BlogCard = ({ blog, isSlideShow = true }) => {
    const { _id, img, name, description } = blog;
    const dispatch = useDispatch();
    
    const handleDelete = (id) => {
        dispatch(blogRemovedData(id));
        toast.error(`${name} blog is deleted!`);
    };
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
                                to={`/blogs/${_id}`}
                            >
                                <Button className={classes.blogCardButton}>
                                    Details
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
                            <div className="mt-5 d-flex justify-content-between">
                                <Link
                                    className={`pt-2`}
                                    to={`/blog-update/${_id}`}
                                >
                                    <Button className={classes.blogCardButton}>
                                        Update
                                        <FaArrowRight className="ms-1" />
                                    </Button>
                                </Link>

                                <Button
                                    className={`pt-2 ${classes.blogCardButton}`}
                                    onClick={() => handleDelete(_id)}
                                >
                                    Delete
                                    <FaArrowRight className="ms-1" />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </>
    );
};

export default BlogCard;
