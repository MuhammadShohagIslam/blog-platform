import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import BlogCard from "../../components/shared/BlogCard/BlogCard";
import Layout from "../../layout/Layout";

const Blogs = () => {
    const blogs = useSelector((state) => state.blogs.blogs);

    return (
        <Layout>
            <Container className="my-5">
                <Row>
                    <>
                        {blogs?.length > 0 ? (
                            <>
                                {blogs.map((blog) => (
                                    <BlogCard
                                        key={blog.id}
                                        blog={blog}
                                        isSlideShow={false}
                                    />
                                ))}
                            </>
                        ) : (
                            <h3 className="text-center text-white">
                                There is no blog
                            </h3>
                        )}
                    </>
                </Row>
            </Container>
        </Layout>
    );
};

export default Blogs;
