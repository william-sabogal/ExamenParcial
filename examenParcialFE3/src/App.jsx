import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [titleError, setTitleError] = useState(false);
  const [authorError, setAuthorError] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [book, setBook] = useState({
    title: "",
    author: "",
  });
  const handleChange = (e, prop) => {
    setBook({ ...book, [prop]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const titlelIsValid =
      book.title.trimStart() == book.title && book.title.length > 2;
    const authorIsValid = book.author.length > 5;
    {
      !titlelIsValid ? setTitleError(true) : setTitleError(false);
      !authorIsValid ? setAuthorError(true) : setAuthorError(false);
      titlelIsValid && authorIsValid ? setIsRight(true) : setIsRight(false);
      setSubmit(true);
    }
    console.log(book);
  };
  return (
    <div className="App">
      <form
        onSubmit={handleSubmit}
        style={{
          border: "1px solid white",
          borderRadius: "5%",
          padding: "20px",
        }}
      >
        <h2>Book Registry Util</h2>
        <h3>Book Title</h3>
        <input
          type="text"
          name="title"
          onChange={(e) => handleChange(e, "title")}
        />
        <br />
        {titleError && <span style={{ color: "red" }}>Error in Title!</span>}
        <h3>Book Author</h3>
        <input
          type="text"
          name="author"
          onChange={(e) => handleChange(e, "author")}
        />
        <br />
        {authorError && <span style={{ color: "red" }}>Error in Author!</span>}
        <br />
        <button type="submit">Save</button>
      </form>
      {isRight && <Card title={book.title} author={book.author} />}
      {(!isRight && submit) && (
        <span style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </span>
      )}
    </div>
  );
}

export default App;
