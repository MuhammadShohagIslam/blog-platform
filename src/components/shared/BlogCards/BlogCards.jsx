import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "../BlogCard/BlogCard";

const BlogCards = ({ blogs, loading }) => {
    return (
        <Container>
            <Row className="mb-5">
                {loading ? (
                    <div
                        style={{ height: "300px" }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <Spinner animation="border" variant="info" />
                    </div>
                ) : (
                    <>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Pagination]}
                        >
                            {blogs?.length > 0 ? (
                                <>
                                    {blogs.map((blog) => (
                                        <SwiperSlide key={blog._id}>
                                            <BlogCard blog={blog} />
                                        </SwiperSlide>
                                    ))}
                                </>
                            ) : (
                                <h3 className="text-center text-white">
                                    There is no blog
                                </h3>
                            )}
                        </Swiper>
                    </>
                )}
            </Row>
        </Container>
    );
};

export default BlogCards;
