import axios from "axios";
import { updateBlog } from "../../../actions/blogAction";

const blogUpdate = (id, updatedBlog) => {
    return async (dispatch) => {
        const response = await axios.put(
            `https://server-smoky-ten.vercel.app/blog/${id}`,
            updatedBlog,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.data;
        if (data.acknowledged) {
            dispatch(updateBlog(id, updatedBlog));
        }
    };
};

export default blogUpdate;
