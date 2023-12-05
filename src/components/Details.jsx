function Details({ book }) {
  return (
    <div>
      {book && (
        <div id="book-container">
          <h2>Book Details:</h2>
          <ul>
            <li>ID: {book.id}</li>
            <li>Title: {book.title}</li>
            <li>Info: {book.info}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Details;
