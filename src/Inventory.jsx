import { useEffect, useState } from "react";
import { addBook, scanBooks } from "./dynamo.js";
import "./App.scss";

export default function Inventory() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    onhand: "",
    name: "",
  });
  const [book, setBook] = useState([]);

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

    if (!form.title || !form.author || !form.onhand) return;

    const item = {
      id: crypto.randomUUID(),

      title: form.title,
      author: form.author,
      onhand: form.onhand,
    };
    await addBook(item);
    setBook((prevBooks) => [...prevBooks, item]);
  }
  console.log(book);
  return (
    <>
      <h1>Inventory Management</h1>
      <div>
        <h2>Add a New Book</h2>
        <form onSubmit={handleAdd}>
          <label>Title:</label>
          <input
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            required
          />

          <label>Author:</label>
          <input
            name="author"
            type="text"
            value={form.author}
            onChange={handleChange}
            required
          />

          <label>onhand:</label>
          <input
            name="onhand"
            type="number"
            value={form.onhand}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Book</button>
        </form>
      </div>

      <ul>
        {book.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>Author: {item.author}</p>
            <p>On Hand: {item.onhand}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
