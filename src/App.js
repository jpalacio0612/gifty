import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from "./pages/Search";
import SearchBar from "./components/SearchBar";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <div className="App">
        <Link className="title" to="/">
          <h1>GIFTY</h1>
        </Link>
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
