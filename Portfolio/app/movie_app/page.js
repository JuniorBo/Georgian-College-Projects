"use client"
import Link from 'next/link';
import styles from "../../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { useState } from 'react';

export default function Movie_app() {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState(null);
  let API_KEY = '30913b7f';

  const searchMovie = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://www.omdbapi.com/?t=${query}&apikey=${API_KEY}`);
    const data = await res.json();
    setMovie(data);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>OMDB Movie Search</h1>
        <form onSubmit={searchMovie}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter movie title"
            required
          />
          <button type="submit">Search</button>
        </form>
        {movie && (
          <div>
            <h2>{movie.Title}</h2>
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        )}
      </div>
    </>
  );
}