// import Movie from "./Movie";

// const MovieList = ({ data, setSingleMovie }) =>
//   // return <Movie data={data} setSingleMovie={setSingleMovie} />;

//   data.length &&
//   data.map((dataItem) => (
//     <Movie
//       key={dataItem.id}
//       data={dataItem}
//       setSingleMovie={setSingleMovie}
//       onFav={true}
//     />
//   ));
// export default MovieList;
import { Row, Col } from "react-bootstrap";
import Movie from "./Movie";

const MovieList = ({ data, setSingleMovie }) => {
  if (!data.length) return null; // render nothing if no movies

  return (
    <Row>
      {data.map((dataItem) => (
        <Col
          key={dataItem.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex justify-content-center mb-4"
        >
          <Movie data={dataItem} setSingleMovie={setSingleMovie} onFav={true} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
