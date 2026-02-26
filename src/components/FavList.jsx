import axios from "axios";
// import { useEffect, useState } from "react"; before context
import Movie from "./Movie";
import { useEffect, useState } from "react";
import ModalUpdate from "./UpdateModal";
import NavBar from "./NavBar";
import Loader from "./Loader";
import { useMovies } from "../contexts/MoviesContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

export default function FavList() {
  // const [movies, setMovies] = useState([]);// before context
  const { movies, setMovies, deleteMovie } = useMovies();
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
  }, [setMovies]);

  const handleUpdate = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <>
      <NavBar />

      {!movies.length && <Loader />}
      <Container fluid className="mt-4">
        <Row>
          {movies.map((movie) => (
            <Col
              key={movie.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <Movie
                data={movie}
                onFav={false}
                onDelete={deleteMovie}
                onUpdate={handleUpdate}
              />
            </Col>
          ))}
        </Row>
      </Container>
      {selectedMovie && (
        <ModalUpdate
          movie={selectedMovie}
          showModal={showModal}
          setShowModal={setShowModal}
          setMovies={setMovies}
        />
      )}
    </>
  );
}
