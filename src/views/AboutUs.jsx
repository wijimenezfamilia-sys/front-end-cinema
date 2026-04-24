import React from 'react';
import { useBooks } from '../hooks/useBooks';

const AboutUs = () => {
  const { darkMode } = useBooks();

  return (
    <div className={`page-container ${darkMode ? 'dark' : ''}`}>
      <div className="about-content">
        <h2>Sobre Nexus Librería</h2>

        <div className="about-section">
          <h3>¿Quiénes somos?</h3>
          <p>
            Nexus Librería es un espacio multifuncional innovador que combina una tienda de libros
            de calidad, una zona de co-working amplia y una cafetería acogedora. Nos dedicamos a crear
            un ambiente inspirador donde los amantes de la lectura, profesionales autónomos y estudiantes
            puedan encontrar todo lo que necesitan para disfrutar, trabajar y conectar.
          </p>
        </div>

        <div className="about-section">
          <h3>Nuestra Historia</h3>
          <p>
            Nexus nació con la visión de revolucionar el concepto de librería tradicional, transformándola
            en un ecosistema donde la lectura, el trabajo y la comunidad convergen. Desde nuestro lanzamiento,
            hemos crecido en las principales ciudades españolas, siempre manteniendo nuestro compromiso
            con la calidad, la diversidad y la innovación en la experiencia del cliente.
          </p>
        </div>

        <div className="about-section">
          <h3>Nuestras Ubicaciones</h3>
          <div className="cities-grid">
            <div className="city-card">
              <h4>🏛️ Madrid</h4>
              <p>Nuestra sede principal con librería completa, co-working premium y cafetería gourmet.</p>
            </div>
            <div className="city-card">
              <h4>📚 Barcelona</h4>
              <p>Espacio literario con vista a Gràcia, eventos culturales y zona de co-working moderna.</p>
            </div>
            <div className="city-card">
              <h4>☕ Valencia</h4>
              <p>Punto de encuentro junto al Puerto con librería especializada y cafetería.</p>
            </div>
            <div className="city-card">
              <h4>🎭 Sevilla</h4>
              <p>Espacio cultural en el corazón de Andalucía con selección curada de libros.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h3>Nuestra Misión</h3>
          <p>
            Fomentar la lectura, el aprendizaje continuo y la creatividad en un espacio compartido.
            Ofrecemos un catálogo diverso de libros, un ambiente profesional para trabajar y
            una comunidad vibrante donde la inspiración fluye naturalmente.
          </p>
        </div>

        <div className="about-section">
          <h3>Nuestros Servicios</h3>
          <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
            <li>📚 Amplio catálogo de libros (ficción, no ficción, academicos)</li>
            <li>💻 Espacio de co-working con Wi-Fi de alta velocidad</li>
            <li>☕ Cafetería con bebidas artesanales y snacks</li>
            <li>📖 Club de lectura y eventos literarios</li>
            <li>🎓 Zona de estudio e investigación</li>
            <li>🤝 Comunidad colaborativa</li>
          </ul>
        </div>

        <div className="contact-info">
          <h3>Contacto</h3>
          <p>📧 Email: info@nexuslibreria.es</p>
          <p>📞 Teléfono: +34 900 456 789</p>
          <p>🌐 Web: www.nexuslibreria.es</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
