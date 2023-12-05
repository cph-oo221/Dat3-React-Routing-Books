import { useRef, useState } from "react";
import Details from "../components/Details";

function FindBook({ findBook }) {
  const idRef = useRef();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div>
      <h1>Find Book</h1>
      <hr />

      <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>

      <div id="container-add-book">
        <div>
          <label htmlFor="id">Enter book id:</label>
          <input
            type="number"
            name="id"
            placeholder="Enter book id"
            ref={idRef}
          />
          <button
            onClick={() => {
              const id = idRef.current.value;

              const bookFound = findBook(id);

              if (bookFound) {
                setError(null);
                setBook(bookFound);
                return;
              }

              setBook(null);
              setError(`Book not found !`);
            }}
          >
            Find Book
          </button>
        </div>

        <div id="book-details">
          <Details book={book} />
        </div>
      </div>
    </div>
  );
}

export default FindBook;
