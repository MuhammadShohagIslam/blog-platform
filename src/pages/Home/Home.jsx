import React, { useEffect,useState } from "react";
import Jumbotron from "../../components/shared/Jumbotron/Jumbotron";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import Layout from "../../layout/Layout";
import { useSelector, useDispatch } from 'react-redux';
import BlogCards from './../../components/shared/BlogCards/BlogCards';
import loadBlogData from './../../redux/middlewares/thunk/blogFetch';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs.blogs);

    useEffect(() => {
        setLoading(true);
        dispatch(loadBlogData());
        setLoading(false);
    }, [dispatch]);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    
    return (
        <Layout>
            <Jumbotron name="World Class Online blogs by BlogPlatform" />
            <SectionTitle
                title="Blogs"
                description="BlogPlatform is an online learning and teaching marketplace. Learn programming, marketing and more."
            />
            <BlogCards blogs={blogs} loading={loading}/>
        </Layout>
    );
};

export default Home;
