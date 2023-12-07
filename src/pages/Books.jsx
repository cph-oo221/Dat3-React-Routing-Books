import { useState } from "react";
import { Link } from "react-router-dom";
import Details from "../components/Details";

function Books({ getBooks }) {
  const [book, setBook] = useState(null);

  return (
    <div>
      <h1>Books</h1>
      <hr />
      {getBooks().map((book) => (
        <ul key={book.id}>
          <li>
            <Link to={`/books`} onClick={() => setBook(book)}>
              {book.title}
            </Link>
          </li>
        </ul>
      ))}

      <Details book={book} />
    </div>
  );
}

export default Books;
