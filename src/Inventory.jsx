import { useEffect, useState } from "react";
import { addBook, scanBooks } from "./dynamo.js";
import "./App.scss";


export default function Inventory() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    onhand: "",
    name: "",
    src: "",
  });
  const [book, setBook] = useState([]);

  const handleDelete = (id) => {
    setBook((prevBooks) => prevBooks.filter((item) => item.id !== id));
  };
  useEffect(() => {
    scanBooks().then(setBook);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }
  async function handleAdd(e) {
    e.preventDefault();

    if (!form.title || !form.author || !form.onhand ) return;

    const item = {
      id: crypto.randomUUID(),

      title: form.title,
      author: form.author,
      onhand: form.onhand,
    };
    await addBook(item);
    setBook((prevBooks) => [...prevBooks, item]);
  }

  return (
    <>
      <h1>Inventory Management</h1>
      <div>
        <form onSubmit={handleAdd}>
          <label className="title">Title:</label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            required
          />

          <label className="author">Author:</label>
          <input
            id="author"
            name="author"
            type="text"
            value={form.author}
            onChange={handleChange}
            required
          />

          <label className="onhand">onhand:</label>
          <input
            id="onhand"
            name="onhand"
            type="number"
            value={form.onhand}
            onChange={handleChange}
            required
          />
          <h3>Add a New Book</h3>
          <button type="submit">Add Book</button>
        </form>
      </div>

      <ul>
        {book.map((item) => (
          <li key={item.id} className="book-item">
            <h3>{item.title}</h3>
            <p>Author: {item.author}</p>
            <p>On Hand: {item.onhand}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
