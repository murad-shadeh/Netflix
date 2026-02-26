import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalMovie from "./ModalMovie";
import { useState } from "react";

const Movie = ({ data, onFav = false, onDelete, onUpdate }) => {
  const [show, setShow] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const img = `https://image.tmdb.org/t/p/w500${data.poster_path}`;

  return (
    <>
      <Card
        bg="dark"
        text="light"
        className="border-0 shadow-lg"
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <Card.Img
          variant="top"
          src={img}
          alt={data.title}
          style={{
            height: "375px",
            objectFit: "cover",
          }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fs-6 fw-bold">{data.title}</Card.Title>

          <Card.Text className="text-secondary small">
            {viewMore ? data.overview : `${data.overview.slice(0, 90)}... `}

            <span
              onClick={() => setViewMore(!viewMore)}
              role="button"
              style={{
                color: "#bbb",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              {viewMore ? " less.." : " more.."}
            </span>

            {data.comments && (
              <>
                <br />
                <span className="text-light mt-2">Comment:</span>{" "}
                {data.comments}
              </>
            )}
          </Card.Text>
          {!onFav ? (
            <div className="mb-1 d-flex gap-2">
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => onDelete?.(data.id)}
              >
                Delete
              </Button>
              <Button
                variant="outline-light"
                size="sm"
                onClick={() => onUpdate?.(data)}
              >
                Update
              </Button>
            </div>
          ) : (
            <div className="mt-auto d-flex justify-content-center">
              <Button variant="danger" size="sm" onClick={handleShow}>
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
