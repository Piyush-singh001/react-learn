const Navebar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Pinterest</h1>
      <input
        type="text"
        placeholder="Search for ideas..."
        className="search-bar"
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
