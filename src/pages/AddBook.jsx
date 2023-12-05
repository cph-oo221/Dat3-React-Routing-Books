import { useRef, useState } from "react";

function AddBook({ addBook }) {
  const titleRef = useRef();
  const infoRef = useRef();
  const [newBook, setNewBook] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = 0;
    const title = titleRef.current.value;
    const info = infoRef.current.value;

    const newBook = {
      id: id,
      title: title,
      info: info,
    };

    console.log(newBook);

    addBook(newBook);
    setNewBook(newBook);
  };

  return (
    <div>
      <h1>Add Book</h1>
      <hr />

      <div id="container-add-book">
        <div id="div1">
          <form>
            <label htmlFor="title">Enter book title:</label>
            <input
              type="text"
              name="title"
              placeholder="Enter book title"
              ref={titleRef}
            />

            <label htmlFor="info">Enter book info:</label>
            <input
              type="text"
              name="info"
              placeholder="Enter book info"
              ref={infoRef}
            />
          </form>

          <button onClick={handleSubmit}>Add Book</button>
        </div>
        <div id="div2">
          {newBook && (
            <div>
              <h3>New book: </h3>
              <p>Book id: {newBook.id}</p>
              <p>Book title: {newBook.title}</p>
              <p>Book info: {newBook.info}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddBook;
