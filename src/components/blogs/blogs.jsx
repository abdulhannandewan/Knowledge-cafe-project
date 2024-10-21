import { useState } from "react";
import { useEffect } from "react";
import Blog from "../blog/blog";

const Blogs = ({handleBookmarkButton , handleReadingTime}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("../public/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // console.log(blogs);

  return (
    <div className="md:w-2/3 ">
      <h1 className="text-4xl font-bold">Blogs : {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} handleBookmarkButton= {handleBookmarkButton} handleReadingTime={handleReadingTime} />
      ))}
    </div>
  );
};

export default Blogs;
