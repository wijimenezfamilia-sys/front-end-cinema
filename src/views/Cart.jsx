import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useBooks } from '../hooks/useBooks';

const Cart = () => {
  const [searchParams] = useSearchParams();
  const { darkMode, getCurrentLocationName } = useBooks();
  const [cartItems, setCartItems] = useState([]);
  const bookId = searchParams.get('book');

  // Simular agregar al carrito
  const handleAddToCart = (bookId) => {
    const quantity = parseInt(searchParams.get('quantity')) || 1;
    setCartItems([...cartItems, { bookId, quantity, addedAt: new Date() }]);
  };

  return (
    <div className={`page-container ${darkMode ? 'dark' : ''}`}>
      <div className="movie-details">
        <h1>🛒 Carrito de Compras</h1>
        
        <div style={{ margin: '2rem 0', padding: '1rem', backgroundColor: darkMode ? '#2a2a2a' : '#f0f0f0', borderRadius: '8px' }}>
          <h3>Ubicación: {getCurrentLocationName()}</h3>
          <p>Puedes recoger tu pedido en cualquiera de nuestras sucursales Nexus</p>
        </div>

        <div className="sessions" style={{ marginTop: '2rem' }}>
          <h3>Resumen de compra:</h3>
          <p>Subtotal: $0.00</p>
          <p>IVA (21%): $0.00</p>
          <h2>Total: $0.00</h2>
          
          <Link to="/" className="nav-button" style={{ marginRight: '1rem' }}>
            ← Seguir comprando
          </Link>
          <button className="nav-button" style={{ cursor: 'pointer' }}>
            ✓ Proceder al pago
          </button>
        </div>

        <div style={{ margin: '2rem 0', padding: '1rem', backgroundColor: darkMode ? '#2a2a2a' : '#e8f5e9', borderRadius: '8px', borderLeft: '4px solid #4caf50' }}>
          <h4>💡 Próximamente:</h4>
          <p>Sistema de compra online completamente funcional con integración de pagos.</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
