import React from 'react';
import { useBooks } from '../hooks/useBooks';

const CineSelector = () => {
  const { city, changeCity, darkMode } = useBooks();

  const locations = [
    { value: 'madrid', label: '🏛️ Madrid' },
    { value: 'barcelona', label: '📚 Barcelona' },
    { value: 'valencia', label: '☕ Valencia' },
    { value: 'sevilla', label: '🎭 Sevilla' }
  ];

  return (
    <div className={`cine-selector ${darkMode ? 'dark' : ''}`}>
      <label htmlFor="city-select">
        📍 Selecciona tu sucursal Nexus:
      </label>
      <select
        id="city-select"
        value={city}
        onChange={(e) => changeCity(e.target.value)}
      >
        {locations.map((location) => (
          <option key={location.value} value={location.value}>
            {location.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CineSelector;
