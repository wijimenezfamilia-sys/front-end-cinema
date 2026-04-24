import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { GlobalProvider } from './context/GlobalContext';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './views/HomePage';
import AboutUs from './views/AboutUs';
import NexusLocationDetail from './views/NexusLocationDetail';
import BookDetails from './views/BookDetails';
import Login from './views/Login';
import Cart from './views/Cart';
import { useBooks } from './hooks/useBooks';

// Página de administración protegida
const AdminPage = () => {
  const { darkMode, nexusLocations } = useBooks();

  const totalBooks = Object.values(nexusLocations).reduce((sum, loc) => sum + (loc.books ? loc.books.length : 0), 0);

  return (
    <PrivateRoute>
      <div className={`page-container ${darkMode ? 'dark' : ''}`}>
        <div className="movie-details">
          <h1>📊 Panel de Administración - Nexus Librería</h1>
          <p>Bienvenido al panel administrativo</p>

          <div className="movie-info-grid">
            <div className="info-item">
              <strong>Usuarios registrados</strong><br/>
              4 usuarios activos
            </div>
            <div className="info-item">
              <strong>Libros en catálogo</strong><br/>
              {totalBooks} títulos
            </div>
            <div className="info-item">
              <strong>Sucursales</strong><br/>
              4 ubicaciones
            </div>
            <div className="info-item">
              <strong>Pedidos hoy</strong><br/>
              23 compras/reservas
            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

function AppContent() {
  const { darkMode } = useBooks();

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/location/:city"
          element={
            <PrivateRoute>
              <NexusLocationDetail />
            </PrivateRoute>
          }
        />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Router>
          <AppContent />
        </Router>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
