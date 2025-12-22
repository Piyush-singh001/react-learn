import React from "react";
import Navebar from "./components/navbar";
import Cards from "./components/Cards";

const App = () => {
  function getData() {
    fetch(`https://api.unsplash.com/photos/random`),
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_KEY}`,
        },
      }
        .then((res) => res.json())
        .then((data) => console.log(data));
  }
  return (
    <div>
      <Navebar />
      <Cards />
    </div>
  );
};

export default App;
