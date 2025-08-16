import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import FavList from "./components/FavList";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<FavList />} />
      </Routes>

      {/* <Home /> */}
    </div>
  );
};

export default App;
