import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import Layout from "../../../layout/Layout";
import { useDispatch } from "react-redux";
import blogCreate from "./../../../redux/middlewares/thunk/blog/blogCreate";

const AddBlog = () => {
    const dispatch = useDispatch();
    
    const handleServiceSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const description = form.description.value;

        // validation
        if (!title) {
            return toast.error("Please Enter title!");
        }
        if (!image) {
            return toast.error("Please Enter Image!");
        }
        if (!description) {
            return toast.error("Please Enter Description!");
        }

        const newServiceObj = {
            name: title,
            img: image,
            description,
        };

        dispatch(blogCreate(newServiceObj));
        Swal.fire({
            position: "top",
            icon: "success",
            title: `${newServiceObj?.name} Blog Is Created`,
            showConfirmButton: false,
            timer: 1500,
        });
        form.reset();
    };

    return (
        <Layout>
            <Container className="my-5">
                <Row className="m-0">
                    <Col lg={7} className="m-auto bg-dark p-lg-5 p-4">
                        <h2 className="text-white text-center mb-4">
                            Let's Create New Blog
                        </h2>
                        <Form onSubmit={handleServiceSubmit}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label className="text-white">
                                    Title
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    placeholder="Enter Title Name"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="image">
                                <Form.Label className="text-white">
                                    Image
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="image"
                                    placeholder="Enter Image"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="description"
                            >
                                <Form.Label className="text-white">
                                    Description
                                </Form.Label>
                                <Form.Control
                                    name="description"
                                    type="text"
                                    placeholder="Enter Description"
                                />
                            </Form.Group>

                            <Button
                                size="lg"
                                className="text-white"
                                type="submit"
                            >
                                Save
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default AddBlog;
