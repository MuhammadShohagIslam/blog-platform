import { LOAD_BLOGS } from "../actionTypes/actionTypes"

export const loadBlog = (blog) => {
    return {
        type: LOAD_BLOGS,
        payload: blog
    }
}