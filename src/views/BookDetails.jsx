import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useBooks } from '../hooks/useBooks';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBookById, darkMode } = useBooks();

  const book = getBookById(id);

  if (!book) {
    return (
      <div className={`page-container ${darkMode ? 'dark' : ''}`}>
        <div className="movie-details">
          <h1>Libro no encontrado</h1>
          <Link to="/" className="nav-button">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`page-container ${darkMode ? 'dark' : ''}`}>
      <div className="movie-details">
        <button
          onClick={() => navigate(-1)}
          className="nav-button"
          style={{ marginBottom: '2rem' }}
        >
          ← Volver
        </button>

        <h1>{book.title}</h1>

        <div className="movie-info-grid">
          <div className="info-item">
            <strong>Autor</strong><br/>
            {book.author}
          </div>
          <div className="info-item">
            <strong>Categoría</strong><br/>
            {book.category}
          </div>
          <div className="info-item">
            <strong>Precio</strong><br/>
            {book.price}
          </div>
          <div className="info-item">
            <strong>Formato</strong><br/>
            {book.format}
          </div>
          <div className="info-item">
            <strong>ISBN</strong><br/>
            {book.isbn}
          </div>
          <div className="info-item">
            <strong>Páginas</strong><br/>
            {book.pages}
          </div>
          <div className="info-item">
            <strong>Valoración</strong><br/>
            ⭐ {book.rating}
          </div>
          <div className="info-item">
            <strong>Año</strong><br/>
            {book.year}
          </div>
        </div>

        <div style={{ margin: '2rem 0' }}>
          <h3>Información Editorial:</h3>
          <p><strong>Editorial:</strong> {book.publisher}</p>
          <p><strong>Idioma:</strong> {book.language}</p>
          <p><strong>Stock disponible:</strong> {book.stock} unidades</p>
          <p><strong>Estado:</strong> {book.availability ? '✅ Disponible' : '❌ Agotado'}</p>
        </div>

        <div style={{ margin: '2rem 0' }}>
          <h3>Descripción:</h3>
          <p>{book.description}</p>
        </div>

        <div className="sessions">
          <h3>Acciones:</h3>
          <Link to={`/cart?book=${book.id}&quantity=1`} className="nav-button" style={{ marginRight: '1rem' }}>
            🛒 Agregar al Carrito
          </Link>
          <Link to={`/`} className="nav-button">
            📚 Ver más libros
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
