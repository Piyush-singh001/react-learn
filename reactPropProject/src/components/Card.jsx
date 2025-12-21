import { Bookmark } from "lucide-react";

const Card = (prop) => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={prop.brandLogo} alt="" />
          <button>
            Save <Bookmark size={15} />
          </button>
        </div>
        <div className="center">
          <h3>
            {prop.companyName} <span>{prop.daysAgo} day ago</span>
          </h3>
          <h2>{prop.workRole}</h2>
          <div className="tag">
            <h4>{prop.tag1}</h4>
            <h4>{prop.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{prop.pay}</h3>
          <p>{prop.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
