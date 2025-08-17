import { Fragment, useEffect, useState } from "react";
import MovieList from "./MovieList";
import axios from "axios";
import { Row } from "react-bootstrap";
import NavElement from "./Navbar";
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
      <NavElement />
      <Row>
        {/* {printingData.length &&
          printingData.map((dataItem) => (
            <MovieList
              key={dataItem.id}
              data={dataItem}
              setSingleMovie={setSingleMovie}
            />
          ))} */}
        <MovieList data={printingData} />
      </Row>
    </Fragment>
  );
};
export default Home;
