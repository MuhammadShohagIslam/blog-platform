import { loadBlog } from "../../../actions/blogAction";

const loadBlogData = () => {
    return async (dispatch) => {
        let response = await fetch(
            "https://course-server-delta.vercel.app/blogs"
        );
        const data = await response.json();
        dispatch(loadBlog(data));
    };
};

export default loadBlogData;
