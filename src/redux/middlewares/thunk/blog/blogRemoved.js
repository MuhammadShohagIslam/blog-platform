import axios from "axios";
import { removedBlog } from "../../../actions/blogAction";

const blogRemoved = (id) => {
    return async (dispatch) => {
        const response = await axios.delete(
            `https://server-smoky-ten.vercel.app/blog/${id}`
        );
        const data = await response.data;
        if (data.acknowledged) {
            dispatch(removedBlog(id));
        }
    };
};

export default blogRemoved;