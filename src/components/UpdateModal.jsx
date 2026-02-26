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
    <Modal
      show={props.showModal}
      onHide={handleCloseModal}
      centered
      size="md"
      contentClassName="bg-dark text-light border-0"
    >
      <Modal.Header closeButton closeVariant="white" className="border-0">
        <Modal.Title className="fw-bold">{props.movie.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="text-secondary small mb-3">{props.movie.overview}</p>

        <Form.Group controlId="updatedComment" className="mb-3">
          <Form.Label className="text-light">Update note</Form.Label>

          <Form.Control
            as="textarea"
            rows={2}
            value={updatedComment}
            onChange={handleCommentChange}
            className="bg-dark text-light border-secondary"
          />
        </Form.Group>

        <div className="d-flex justify-content-end gap-2 mt-3">
          <Button variant="outline-light" onClick={handleCloseModal}>
            Close
          </Button>

          <Button variant="danger" onClick={handleUpdate}>
            Update
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default ModalUpdate;
