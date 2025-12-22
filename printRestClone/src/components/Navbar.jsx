import { useState } from "react";

const Navebar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  console.log(input);

  return (
    <nav className="navbar">
      <h1 className="logo">Pinterest</h1>
      <input
        type="text"
        placeholder="Search for ideas..."
        className="search-bar"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(input);
          }
        }}
      />
      <div className="icons">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="Profile"
        />
      </div>
    </nav>
  );
};

export default Navebar;
