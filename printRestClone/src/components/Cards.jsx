import Card from "./Card";

const Cards = (props) => {
  return (
    <div className="grid">
      {props.imgdata.map((img) => (
        <Card key={img.id} img={img.src.medium} dis={img.alt} />
      ))}
    </div>
  );
};

export default Cards;
