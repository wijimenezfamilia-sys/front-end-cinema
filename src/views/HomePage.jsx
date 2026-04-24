import React from 'react';
import CineSelector from '../components/CineSelector';
import Libro from '../components/Libro';
import { useBooks } from '../hooks/useBooks';

const HomePage = () => {
  const { books, darkMode } = useBooks();

  return (
    <div className={`home-page ${darkMode ? 'dark' : ''}`}>
      <CineSelector />

      {books.map((book) => (
        <Libro key={book.id} book={book} />
      ))}
    </div>
  );
};

export default HomePage;
