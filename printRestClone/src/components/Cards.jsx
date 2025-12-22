import Card from "./card";

const Cards = (props) => {
  return (
    <div className="grid">
      {props.imgdata.map((img) => (
        <Card key={img.id} img={img.urls.small} />
      ))}
    </div>
  );
};

export default Cards;
