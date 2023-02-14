import {
    ADD_TO_BLOG,
    LOAD_BLOGS,
    REMOVE_FROM_BLOGS,
    UPDATE_BLOG_FROM_BLOGS,
} from "./../actionTypes/actionTypes";

const initialBlogState = {
    blogs: [],
};

const blogReducer = (state = initialBlogState, action) => {
    switch (action.type) {
        case LOAD_BLOGS:
            return {
                ...state,
                blogs: action.payload,
            };
        case ADD_TO_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.payload],
            };
        case UPDATE_BLOG_FROM_BLOGS:
            const blog = state.blogs.filter(
                (blog) => blog._id === action.payload.id
            );
            const blogs = state.blogs.filter(blog => blog._id !== action.payload.id);
            let newBlog = {
                ...blog[0],
                ...action.payload.updateBlogData
            }
            return {
                ...state,
                blogs: [...blogs, newBlog],
            };
        case REMOVE_FROM_BLOGS:
            return {
                ...state,
                blogs: state.blogs.filter(
                    (blog) => blog._id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default blogReducer;
