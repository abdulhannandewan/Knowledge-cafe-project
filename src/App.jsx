import { useState } from "react";
import Blogs from "./components/blogs/blogs";
import Bookmarks from "./components/Bookmarks/bookmarks";
import Header from "./components/header/header";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [bookMarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

 const handleReadingTime = (reading_time) => {
  console.log(reading_time);
  setReadingTime(readingTime + reading_time)
  
 }

  const handleBookmarkButton = (blog) => {
    const newBookmarks = [...bookMarks, blog];
    setBookmarks(newBookmarks);
    
  }
  return (
    <>
      <div className="max-w-7xl mx-auto">
      <Header />
      </div>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleReadingTime={handleReadingTime} handleBookmarkButton={handleBookmarkButton} />
        <Bookmarks readingTime={readingTime} bookMarks={bookMarks} />

      </div>
    </>
  );
}

export default App;
