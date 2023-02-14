import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import BlogDetails from "./pages/Blogs/BlogDetails/BlogDetails";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { Provider } from "react-redux";
import store from './redux/store';
import AddBlog from "./pages/Blogs/AddBlog/AddBlog";
import UpdateBlog from "./pages/Blogs/UpdateBlog/UpdateBlog";

function App() {
    return (
        <Provider store={store}>
            <Toaster />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-blog" element={<AddBlog />} />
                <Route path="/blog-update/:id" element={<UpdateBlog />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:id" element={<BlogDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Provider>
    );
}

export default App;
