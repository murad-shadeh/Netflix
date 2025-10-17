import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalUpdate from "./UpdateModal";
import NavBar from "./NavBar";
import Loader from "./Loader";

export default function FavList() {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const serverURL = `${import.meta.env.VITE_LOCAL_SERVER}/getMovies`;
    axios
      .get(serverURL)
      .then((response) => {
        setMovies(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    const serverURL = `${import.meta.env.VITE_LOCAL_SERVER}/delete/${id}`;
    axios
      .delete(serverURL)
      .then(() => {
        setMovies((movies) => movies.filter((movie) => movie.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const poster_pathURL = "http://image.tmdb.org/t/p/w500/";

  return (
    <>
      <NavBar />
      {!movies.length && <Loader />}
      <div className="container mt-4 mb-4">
        <div className="row g-4">
          {movies.map((movie) => (
            <div className="col-md-4 d-flex" key={movie.id}>
              <Card className="h-100 w-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={poster_pathURL + movie.poster_path}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {movie.overview}
                    <br />
                    <strong>Comments:</strong> {movie.comments}
                  </Card.Text>
                  <div className="mt-auto">
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(movie.id)}
                      className="me-2"
                    >
                      Delete
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => handleUpdate(movie)}
                    >
                      Update
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        {selectedMovie && (
          <ModalUpdate
            movie={selectedMovie}
            showModal={showModal}
            setShowModal={setShowModal}
            setMovies={setMovies}
          />
        )}
      </div>
    </>
  );
}
