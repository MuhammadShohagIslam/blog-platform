import axios from "axios";
import { updateBlog } from "../../../actions/blogAction";

const blogUpdate = (id, updatedBlog) => {
    return async (dispatch) => {
        const response = await axios.put(
            `${process.env.REACT_APP_SERVER_API}/blog/${id}`,
            updatedBlog,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.data;
        if (data.lastErrorObject.updatedExisting) {
            dispatch(updateBlog(id, updatedBlog));
        }
    };
};

export default blogUpdate;
