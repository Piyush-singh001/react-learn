import React from "react";

const Navebar = () => {
  return (
    <nav class="navbar">
      <h1 class="logo">Pinterest</h1>
      <input type="text" placeholder="Search for ideas..." class="search-bar" />
      <div class="icons">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="Profile"
        />
      </div>
    </nav>
  );
};

export default Navebar;
