import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";
import { Actor } from "./pages/Actor";
import { Movie } from "./pages/Movie";
//import { MovieClass } from "./pages/MovieClass";
import { Favorites } from "./pages/Favorites";
import { NotFound } from "./pages/NotFound";
import "./styles.css";
import { ThemeProvider } from "./ThemeContext";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/test-react2/" element={<Home />} />
        <Route path="/test-react2/search-results" element={<SearchResults />} />
        <Route path="/test-react2/actor" element={<Actor />} />
        <Route path="/test-react2/movie" element={<Movie />} />
        <Route path="/test-react2/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

