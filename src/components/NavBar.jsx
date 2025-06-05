import React from 'react'
import "../App.scss";

export default function NavBar() {
  return (
    <nav className="navbar">
      <a href="/">BookStore</a>
      <a href="/inventory">Inventory</a>
      <a href="/login">Login</a>
    </nav>
  );
}
