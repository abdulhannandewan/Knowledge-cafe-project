import Blogs from "./components/blogs/blogs";
import Bookmarks from "./components/Bookmarks/bookmarks";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <div className="md:flex ">
        <Blogs />
        <Bookmarks/>
      </div>
    </>
  );
}

export default App;
