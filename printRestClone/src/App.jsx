import Navebar from "./components/navbar";
import Cards from "./components/Cards";
import { useEffect, useState, useRef } from "react";

const App = () => {
  const pexels_KEY = "gp6NPgRDuk03sFP33Bz9mPBGFGSeVuZdGEmhQXBqOsbLk89EmZwk9lS8";
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(3);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef(null);

  const [query, setQuery] = useState("");

  const handleSearch = (value) => {
    setQuery(value);
    console.log("Search query:", value);
  };

  async function getData() {
    if (loading) return;
    setLoading(true);
    try {
      console.log("Fetching data for page:", page);
      const url = query
        ? `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=20`
        : `https://api.pexels.com/v1/curated?page=${page}&per_page=20`;

      const res = await fetch(url, {
        headers: {
          Authorization: pexels_KEY,
        },
      });

      const imgdata = await res.json();
      setImages((prev) => [...prev, ...imgdata.photos]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [page]);
  useEffect(() => {
    setImages([]);
    setPage(1);
    getData();
  }, [query]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { root: null, threshold: 0.1 }
    );
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navebar onSearch={handleSearch} />
      <Cards imgdata={images} />
      <div ref={sentinelRef} style={{ height: "20px" }} />

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
    </div>
  );
};

export default App;
