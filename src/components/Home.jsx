import { Fragment, useEffect, useState } from "react";
import MovieList from "./MovieList";
import axios from "axios";
import { Container, Navbar, Row } from "react-bootstrap";
import NavBar from "./NavBar";
const Home = () => {
  const [printingData, setPrinitngData] = useState([]);
  // const [singleMovie, setSingleMovie] = useState({});
  useEffect(() => {
    fetchTrendingHandler();
  }, []);
  const fetchTrendingHandler = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_LOCAL_SERVER}/trending`
      );
      console.log(res.data.message);
      setPrinitngData(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <NavBar />
      {/* maintain a fixed container */}
      <Container fluid className="mt-4">
        <MovieList data={printingData} />
      </Container>
    </Fragment>
  );
};
export default Home;
