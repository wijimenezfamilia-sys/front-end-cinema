import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { booksDataMadrid } from '../data/booksDataMadrid';
import { booksDataBarcelona } from '../data/booksDataBarcelona';
import { booksDataValencia } from '../data/booksDataValencia';
import { booksDataSevilla } from '../data/booksDataSevilla';

// Información de sucursales Nexus
const nexusLocations = {
  madrid: {
    name: 'Madrid',
    address: 'Calle Principal 123, Madrid 28001',
    phone: '+34 91 123 4567',
    email: 'madrid@nexuslibreria.es',
    capacity: 5000,
    services: ['Venta de libros', 'Co-working', 'Cafetería'],
    wifi: true,
    cafeteria: true,
    coworking: true,
    hours: '09:00 - 21:00 (L-D)',
    books: booksDataMadrid
  },
  barcelona: {
    name: 'Barcelona',
    address: 'Passeig de Gràcia 456, Barcelona 08007',
    phone: '+34 93 456 7890',
    email: 'barcelona@nexuslibreria.es',
    capacity: 4500,
    services: ['Venta de libros', 'Co-working', 'Cafetería', 'Eventos'],
    wifi: true,
    cafeteria: true,
    coworking: true,
    hours: '09:00 - 22:00 (L-D)',
    books: booksDataBarcelona
  },
  valencia: {
    name: 'Valencia',
    address: 'Avenida del Puerto 789, Valencia 46001',
    phone: '+34 96 789 0123',
    email: 'valencia@nexuslibreria.es',
    capacity: 3500,
    services: ['Venta de libros', 'Co-working', 'Cafetería'],
    wifi: true,
    cafeteria: true,
    coworking: false,
    hours: '10:00 - 20:00 (L-D)',
    books: booksDataValencia
  },
  sevilla: {
    name: 'Sevilla',
    address: 'Plaza de la Constitución 234, Sevilla 41001',
    phone: '+34 95 234 5678',
    email: 'sevilla@nexuslibreria.es',
    capacity: 3000,
    services: ['Venta de libros', 'Cafetería', 'Club de lectura'],
    wifi: true,
    cafeteria: true,
    coworking: false,
    hours: '09:30 - 20:30 (L-D)',
    books: booksDataSevilla
  }
};

// Custom hook que utiliza el contexto global y maneja los libros
export const useBooks = () => {
  const { city, darkMode, toggleDarkMode, changeCity } = useContext(GlobalContext);

  // Función para obtener libros según la ciudad
  const getBooksByLocation = (cityName) => {
    const location = nexusLocations[cityName];
    return location ? location.books : booksDataMadrid;
  };

  // Función para obtener el nombre de la ubicación actual
  const getCurrentLocationName = () => {
    const location = nexusLocations[city];
    return location ? location.name : 'Madrid';
  };

  // Función para obtener información de una ubicación
  const getLocationInfo = (cityName) => {
    return nexusLocations[cityName] || null;
  };

  // Función para obtener un libro por ID
  const getBookById = (id) => {
    const allBooks = [
      ...booksDataMadrid,
      ...booksDataBarcelona,
      ...booksDataValencia,
      ...booksDataSevilla
    ];
    return allBooks.find(book => book.id === parseInt(id));
  };

  // Función para buscar libros por término
  const searchBooks = (term) => {
    const allBooks = getBooksByLocation(city);
    const lowerTerm = term.toLowerCase();
    return allBooks.filter(book =>
      book.title.toLowerCase().includes(lowerTerm) ||
      book.author.toLowerCase().includes(lowerTerm) ||
      book.category.toLowerCase().includes(lowerTerm)
    );
  };

  return {
    // Estado del contexto
    city,
    darkMode,

    // Funciones del contexto
    changeCity,
    toggleDarkMode,

    // Datos de libros
    books: getBooksByLocation(city),
    getCurrentLocationName,
    getLocationInfo,
    getBookById,
    searchBooks,
    nexusLocations
  };
};
