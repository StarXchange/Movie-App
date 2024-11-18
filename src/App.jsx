import React, { useState } from 'react'
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieCard from './components/MovieCard';

const App = () => {
  const [movies, setMovies] = useState([
    {title: "Jurassic World", rating: 9.0, description: "The Fallen Kingdom", posterURL: "https://hayotfilms.com/wp-content/uploads/2023/06/jurassic-world-fallen-kingdom-hollywood-movies.jpg"},
    {title: "The Da Vinci Code", rating: 9.0, description: "The Da Vinci Code", posterURL: "https://hayotfilms.com/wp-content/uploads/2023/06/the-da-vinci-code-hollywood-movies.jpg"},
  ]);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    movie.rating >= filterRating);
    
  
  return (
    <div className="app">
      <h1>Movie App</h1>
      <MovieCard />
      <Filter
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
        filterRating={filterRating}
        setfilterRating={setFilterRating}
         />
         <MovieList movies={filteredMovies} />
         <button onClick={() => addMovie({title: "The Matrix", rating: 9.0, description: "The Matrix", posterURL: "https://hayotfilms.com/wp-content/uploads/2023/06/the-matrix-hollywood-movies.jpg"})}>Add Movie</button>
    </div>
  );
};

export default App