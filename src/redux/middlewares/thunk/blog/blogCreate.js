import axios from "axios";
import { addBlog } from "../../../actions/blogAction";

const blogCreate = (blog) => {
    return async (dispatch) => {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER_API}/blog`,
            blog,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.data;
        if (data.acknowledged) {
            dispatch(addBlog({ _id: data.insertedId, ...blog }));
        }
    };
};

export default blogCreate;
