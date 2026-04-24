import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useBooks } from '../hooks/useBooks';

const NexusLocationDetail = () => {
  const { city } = useParams();
  const navigate = useNavigate();
  const { books, darkMode, getCurrentLocationName, getLocationInfo } = useBooks();

  const info = getLocationInfo(city);

  if (!info) {
    return (
      <div className={`page-container ${darkMode ? 'dark' : ''}`}>
        <div className="movie-details">
          <h1>Sucursal no encontrada</h1>
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

        <h1>📚 Nexus Librería - {getCurrentLocationName()}</h1>

        <div className="movie-info-grid">
          <div className="info-item">
            <strong>Teléfono</strong><br/>
            {info.phone}
          </div>
          <div className="info-item">
            <strong>Dirección</strong><br/>
            {info.address}
          </div>
          <div className="info-item">
            <strong>Capacidad</strong><br/>
            {info.capacity} libros en catálogo
          </div>
          <div className="info-item">
            <strong>Servicios</strong><br/>
            {info.services.join(', ')}
          </div>
          <div className="info-item">
            <strong>Wi-Fi</strong><br/>
            {info.wifi ? '✅ Disponible' : '❌ No disponible'}
          </div>
          <div className="info-item">
            <strong>Cafetería</strong><br/>
            {info.cafeteria ? '☕ Disponible' : '❌ No disponible'}
          </div>
        </div>

        <div style={{ margin: '2rem 0' }}>
          <h3>Información de contacto:</h3>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Horario:</strong> {info.hours}</p>
          <p><strong>Co-working:</strong> {info.coworking ? '✅ Espacio disponible' : '❌ No disponible'}</p>
        </div>

        <div style={{ margin: '2rem 0' }}>
          <h3>Catálogo actual:</h3>
          <p>Actualmente disponemos de {books.length} libros</p>

          <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
            {books.map(book => (
              <div key={book.id} style={{
                padding: '1rem',
                background: darkMode ? '#333' : '#f8f9fa',
                borderRadius: '8px'
              }}>
                <strong>{book.title}</strong> - {book.author} ({book.category})
                <br/>
                <small>{book.availability ? '✅ Disponible' : '❌ Agotado'} | {book.format} | {book.price}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NexusLocationDetail;
