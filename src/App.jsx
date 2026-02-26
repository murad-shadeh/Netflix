import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import FavList from "./components/FavList";

const App = () => {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#141414",
        minHeight: "100vh",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<FavList />} />
      </Routes>
    </div>
  );
};

export default App;
