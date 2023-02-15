import { loadBlog } from "../../../actions/blogAction";

const loadBlogData = () => {
    return async (dispatch) => {
        let response = await fetch(
            `${process.env.REACT_APP_SERVER_API}/blogs`
        );
        const data = await response.json();
        dispatch(loadBlog(data));
    };
};

export default loadBlogData;
