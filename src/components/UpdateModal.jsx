import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import axios from "axios"; after context
import { useState, useEffect } from "react";
import { useMovies } from "../contexts/MoviesContext";
function ModalUpdate(props) {
  const { updateMovie } = useMovies();
  const [updatedComment, setUpdatedComment] = useState("");
  // better ux keep the prev comment prefilled
  // state only runs for first render, we used useEffect to update when we open on differnet movie
  useEffect(() => {
    if (props.movie) {
      setUpdatedComment(props.movie.comments || "");
    }
  }, [props.movie]);
  const handleUpdate = async () => {
    await updateMovie(props.movie.id, updatedComment);
    props.setShowModal(false);
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
