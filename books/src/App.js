import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    getData();

    async function getData() { // getdata fro api 
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/books"
      );
      const data = await response.json();

      setBooks(data);
    }
  }, []);

  return (
    <div className="App">
      <h1>Game of thrones Books</h1>
      {books && (
        <div className="books">
          {books.map((book, index) => (
            <div key={index}>
              <h2 className="book">{book.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
