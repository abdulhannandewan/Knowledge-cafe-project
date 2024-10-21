import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog , handleBookmarkButton , handleReadingTime }) => {
  const {
    title,
    cover,
    author,
    author__img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="mb-20">
      <img className="w-full mb-4" src={cover} alt={`cover picture of the title ${title}`} />
      <div className="flex mb-4 justify-between">
        <div className="flex">
          <img className="w-14" src={author__img} alt="author image" />
          <div className="ml-6">
            <h3 className=" text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="mb-4 flex justify-center items-center">
          <span className="mr-3">{reading_time} min read</span>
          <button onClick={()=>{handleBookmarkButton(blog)}} className="text-green-700 text-2xl"><FaBookmark/></button>
          
        </div>
      </div>
      <h2 className="text-4xl mb-4">{title}</h2>
      <p>{
        hashtags.map(hash => <span key={hash} ><a href="">{hash}</a></span>)
        }</p>
        <h1 onClick={() => handleReadingTime(reading_time)} className="text-2xl text-bold underline"><a href="#">Mark as read</a></h1>
    </div>
    
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
