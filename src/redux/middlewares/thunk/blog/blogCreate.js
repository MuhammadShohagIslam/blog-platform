import axios from "axios";
import { addBlog } from "../../../actions/blogAction";

const blogCreate = (blog) => {
    return async (dispatch) => {
        const response = await axios.post(
            `https://server-smoky-ten.vercel.app/services`,
            blog,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.data;
        if (data.acknowledged) {
            dispatch(addBlog(data));
        }
    };
};

export default blogCreate;
