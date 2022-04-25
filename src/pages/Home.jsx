import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=ed092a4c0edef4725e5326c20541cc26&language=en-US&page=1");
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <>
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div layout className="popular-movies">
        {filtered.map((movie) => {
          return (
            <AnimatePresence>
              <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} key={movie.id} layout>
                <h2>{movie.title}</h2>
                <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.title} />
              </motion.div>
            </AnimatePresence>
          );
        })}
      </motion.div>
    </>
  );
}

export default Home;
