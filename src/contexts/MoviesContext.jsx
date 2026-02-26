import axios from "axios";
import { toast } from "react-toastify";
import { createContext, useContext, useState } from "react";

// first step: create the context
const MoviesContext = createContext();

// second step: create the provider for the context
export function MoviesProvider({ children }) {
  // global state that stores favorite movies
  const [movies, setMovies] = useState([]);
  const addMovie = async (movie, comment) => {
    const obj = {
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      overview: movie.overview,
      comments: comment,
    };
    // adding movie to fav
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_LOCAL_SERVER}/addMovie`,
        obj,
      );

      // update state after POST req
      // add on top only the new movie object of the array
      setMovies((prev) => [...prev, res.data.rows[0]]);
      toast.success("Movie added to favorites 🎬");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add movie");
    }
  };

  const updateMovie = async (id, updatedComment) => {
    try {
      await axios.put(`${import.meta.env.VITE_LOCAL_SERVER}/update/${id}`, {
        comments: updatedComment,
      });

      setMovies((prev) =>
        prev.map((movie) =>
          movie.id === id ? { ...movie, comments: updatedComment } : movie,
        ),
      );
      toast.success("Movie updated successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update movie");
    }
  };
  const deleteMovie = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_LOCAL_SERVER}/delete/${id}`);

      // remove movie from global state after successful DELETE
      setMovies((prev) => prev.filter((movie) => movie.id !== id));
      toast.success("Movie deleted successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete movie");
    }
  };

  return (
    <MoviesContext.Provider
      value={{ movies, setMovies, addMovie, updateMovie, deleteMovie }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

// Third: use the context
// eslint-disable-next-line react-refresh/only-export-components
export function useMovies() {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error("useMovies must be used within MoviesProvider");
  }

  return context;
}
