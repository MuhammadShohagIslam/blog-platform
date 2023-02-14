import {
    ADD_TO_BLOG,
    LOAD_BLOGS,
    REMOVE_FROM_BLOGS,
    UPDATE_BLOG_FROM_BLOGS,
} from "../actionTypes/actionTypes";

export const loadBlog = (blog) => {
    return {
        type: LOAD_BLOGS,
        payload: blog,
    };
};

export const addBlog = (blog) => {
    return {
        type: ADD_TO_BLOG,
        payload: blog,
    };
};

export const updateBlog = (id, updateBlogData) => {
    return {
        type: UPDATE_BLOG_FROM_BLOGS,
        payload: {
            id,
            updateBlogData
        },
    };
};

export const removedBlog = (id) => {
    return {
        type: REMOVE_FROM_BLOGS,
        payload: id,
    };
};
