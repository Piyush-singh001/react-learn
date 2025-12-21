function Card(user) {
  let name = user.user || "Guest";
  return (
    <div className="card">
      <img
        src={
          user.img ||
          "https://images.unsplash.com/photo-1758045747219-b38d04de019b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt=""
      />
      <h1>Hello {name} bhai</h1>
      <button>Start</button>
    </div>
  );
}
export default Card;
