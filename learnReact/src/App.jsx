import Card from "./components/Card";
import Navebar from "./components/Navebar";

const App = () => {
  return (
    <>
      <Navebar></Navebar>
      <div className="parent-card">
        <Card
          user="Rahul"
          img="https://images.unsplash.com/photo-1659698314782-fe80a44632b2?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Card>
        <Card />
        <h1>Kese ho aap log</h1>
      </div>
    </>
  );
};

export default App;
