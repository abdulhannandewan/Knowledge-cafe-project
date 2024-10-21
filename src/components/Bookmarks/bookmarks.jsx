/* eslint-disable react/prop-types */

const Bookmarks = ({bookMarks , readingTime}) => {
  return (
    <div className="w-1/3">
    <h1 className="bg-slate-500 text-3xl border-2 border-green-950 rounded-lg text-white m-5 p-8">Spend Time  <span>{readingTime}</span> min</h1>
      <h1 className="text-4xl font-bold text-green-600">Booksmarks : {bookMarks.length}</h1>
      <div className="bg-gray-300">
      {
        bookMarks.map((book, idx) => <h2 className="text-3xl border-2 rounded-lg border-green-950 m-2 p-8  text-green-500" key={idx} >{book.title}</h2>)
      }
      </div>
    </div>
  );
};

export default Bookmarks;