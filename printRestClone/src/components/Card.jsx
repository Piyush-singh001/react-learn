import { Heart, Bookmark, Download } from "lucide-react";
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <div id="content">
        <h2>{props.dis}</h2>
        <button>
          <Download />
          Downlode
        </button>
      </div>
      <div id="like">
        <Heart className="icon" size={22} />
        <Bookmark className="icon" />
      </div>
    </div>
  );
};

export default Card;
