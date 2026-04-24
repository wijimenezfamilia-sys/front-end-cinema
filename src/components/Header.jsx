import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useBooks } from '../hooks/useBooks';

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const { getCurrentLocationName, darkMode, toggleDarkMode } = useBooks();

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header className={darkMode ? 'dark' : ''}>
      <div className="header-content">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>📚 Nexus Librería - {getCurrentLocationName()}</h1>
        </Link>

        <nav className="header-nav">
          <Link to="/" className="nav-link">📖 Catálogo</Link>
          <Link to="/about" className="nav-link">ℹ️ Sobre Nexus</Link>
          <Link to="/cart" className="nav-link">🛒 Carrito</Link>
          {user && user.role === 'admin' && (
            <Link to="/admin" className="nav-link">⚙️ Admin</Link>
          )}
        </nav>

        <div className="header-controls">
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
          </button>

          {user ? (
            <>
              <span className="user-greeting">
                Hola, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="auth-button logout"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <Link to="/login" className="auth-button">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
