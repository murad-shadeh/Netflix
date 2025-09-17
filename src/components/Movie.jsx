import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalMovie from "./ModalMovie";
import { useState } from "react";
const Movie = ({ data, onFav = false }) => {
  const [singleMovie, setSingleMovie] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* const [showModal, setShowModal] = useState(false);*/
  // const showModalHandler = () => {
  //   setShowModal(showModal);
  // };
  const handleClick = () => {
    handleShow();
    setSingleMovie(singleMovie);
  };
  const img = `https://image.tmdb.org/t/p/w500${data.poster_path}`;

  return (
    <>
      {/* make the card take 100% heigh of its parent column */}
      <Card className="h-100">
        <img src={img} alt={data.title} />
        <Card.Body className="d-flex flex-column">
          <Card.Title> {data.title}</Card.Title>
          <Card.Text>{data.overview}</Card.Text>

          {!onFav ? (
            <>
              <Button variant="success">Update</Button>
              <Button variant="danger">Delete</Button>
            </>
          ) : (
            <div className="mt-auto d-flex justify-content-center">
              <Button variant="primary" onClick={handleClick}>
                Add to Favorites
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
      <ModalMovie data={data} show={show} handleClose={handleClose} />
    </>
  );
};
export default Movie;
