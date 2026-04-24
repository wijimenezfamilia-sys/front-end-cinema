import React from 'react';
import { Link } from 'react-router-dom';
import { useBooks } from '../hooks/useBooks';

const Libro = ({ book }) => {
  const { darkMode } = useBooks();

  return (
    <div className={`movie ${darkMode ? 'dark' : ''}`}>
      <h2>{book.title}</h2>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Categoría:</strong> {book.category}</p>
      <p><strong>Precio:</strong> {book.price}</p>
      <p><strong>Formato:</strong> {book.format}</p>
      <p><strong>Disponibilidad:</strong> {book.availability ? '✅ Disponible' : '❌ Agotado'} ({book.stock})</p>
      <p><strong>Descripción:</strong> {book.description}</p>

      <Link to={`/book/${book.id}`} className="nav-button">
        Ver más detalles
      </Link>
    </div>
  );
};

export default Libro;
