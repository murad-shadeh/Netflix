import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalUpdate from "./UpdateModal";
import NavBar from "./NavBar";

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
    console.log(id);
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
      <div>
        <div className="row">
          {movies.map((movie) => (
            <div className="col-md-4" key={movie.id}>
              <Card style={{ marginBottom: "20px" }}>
                <Card.Img
                  variant="top"
                  src={poster_pathURL + movie.poster_path}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>
                    <br />
                    {movie.overview}
                    <br />
                    Comments: {movie.comments}
                  </Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(movie.id)}
                  >
                    Delete
                  </Button>
                  <Button variant="primary" onClick={() => handleUpdate(movie)}>
                    {" "}
                    Update{" "}
                  </Button>
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
