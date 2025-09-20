import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalMovie = ({ show, data, handleClose }) => {
  // const handleClose = () => setShow(false)
  // console.log(handleClose);
  // console.log({ data });
  const img = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  const submitHandler = (e) => {
    e.preventDefault();
    const comm = e.target.comment.value;
    console.log(comm);
    const obj = {
      title: data.title,
      release_date: data.release_date,
      poster_path: data.poster_path,
      overview: data.overview,
      comments: comm,
    };
    axios
      .post(`${import.meta.env.VITE_LOCAL_SERVER}/addMovie`, obj)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Woohoo, you are reading this text in a modal! */}
        <img
          src={img}
          alt={data.title}
          className="w-100 mb-3 rounded"
          style={{ objectFit: "cover" }}
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">
              Add a comment
            </label>
            <input type="text" id="comment" className="form-control" required />
          </div>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="me-2 mt-2"
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleClick}
            type="submit"
            className="mt-2"
          >
            Save data
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};
export default ModalMovie;
