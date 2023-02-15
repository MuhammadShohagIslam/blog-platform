import axios from "axios";
import { removedBlog } from "../../../actions/blogAction";

const blogRemoved = (id) => {
    return async (dispatch) => {
        const response = await axios.delete(
            `${process.env.REACT_APP_SERVER_API}/blog/${id}`
        );
        const data = await response.data;
        if (data.acknowledged) {
            dispatch(removedBlog(id));
        }
    };
};

export default blogRemoved;