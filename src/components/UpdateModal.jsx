import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
function ModalUpdate(props) {
  const [updatedComment, setUpdatedComment] = useState("");
  const handleUpdate = () => {
    const serverURL = `${import.meta.env.VITE_LOCAL_SERVER}/update/${
      props.movie.id
    }`;
    const updatedMovieData = {
      comments: updatedComment,
    };
    axios
      .put(serverURL, updatedMovieData)
      .then(() => {
        const updatedMovie = { ...props.movie, comments: updatedComment };
        props.setMovies((movies) => {
          const updatedMovies = movies.map((movie) =>
            movie.id === updatedMovie.id ? updatedMovie : movie
          );
          return updatedMovies;
        });
        props.setShowModal(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleCloseModal = () => {
    props.setShowModal(false);
  };
  const handleCommentChange = (event) => {
    setUpdatedComment(event.target.value);
  };
  return (
    <Modal show={props.showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{props.movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.movie.overview}
        <Form.Group controlId="updatedComment">
          <Form.Label>Updated Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            value={updatedComment}
            onChange={handleCommentChange}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalUpdate;
