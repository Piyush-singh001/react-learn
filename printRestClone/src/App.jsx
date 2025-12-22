import Navebar from "./components/navbar";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";

const App = () => {
  const UNSPLASH_KEY = "rRWT80f7R4ia5WBVFeo8DnEHyRa4jo-Fgzy2zz4LE2s";
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const res = await fetch(
        "https://api.unsplash.com/photos/random?count=20",
        {
          headers: {
            Authorization: `Client-ID ${UNSPLASH_KEY}`,
          },
        }
      );

      const imgdata = await res.json();
      setData(imgdata);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
    >
      <Navebar />
      <Cards imgdata={data} />
      <div ></div>
    </div>
  );
};

export default App;
