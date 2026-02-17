// import axios from "axios";// after context
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useMovies } from "../contexts/MoviesContext";
const ModalMovie = ({ show, data, handleClose }) => {
  const { addMovie } = useMovies();
  // const handleClose = () => setShow(false)
  // console.log(handleClose);
  // console.log({ data });
  const img = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  const submitHandler = async (e) => {
    e.preventDefault();
    const comm = e.target.comment.value;
    console.log(comm);
    await addMovie(data, comm);
    handleClose();
    // const obj = {
    //   title: data.title,
    //   release_date: data.release_date,
    //   poster_path: data.poster_path,
    //   overview: data.overview,
    //   comments: comm,
    // };
    // axios
    //   .post(`${import.meta.env.VITE_LOCAL_SERVER}/addMovie`, obj)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
  };

  // const handleClick = () => {
  //   handleClose();
  // };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="md" //  to be adjusted for later ... "sm", "md", "lg", or "xl"
      dialogClassName="custom-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={img}
          alt={data.title}
          className="img-fluid mb-3 rounded"
          style={{
            maxHeight: "350px",
            objectFit: "contain",
            width: "100%",
            backgroundColor: "#000",
          }}
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">
              Add a comment
            </label>
            <input type="text" id="comment" className="form-control" required />
          </div>
          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add to Favorites
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};
export default ModalMovie;
