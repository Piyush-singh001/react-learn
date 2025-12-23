import {
  HouseHeart,
  Compass,
  Table2,
  LayersPlus,
  Bell,
  MessageCircle,
  Cog,
} from "lucide-react";

const Sidebar = () => {
  const ions = [
    { name: "Home", icon: <HouseHeart /> },
    { name: "Compass", icon: <Compass /> },
    { name: "Your boards", icon: <Table2 /> },
    { name: "Create", icon: <LayersPlus /> },
    { name: "Notification", icon: <Bell /> },
    { name: "Message", icon: <MessageCircle /> },
  ];
  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/145/145808.png"
          alt=""
        />
      </div>
      <div className="icons">
        <div className="ion-group">
          {ions.map((ion) => (
            <div className="ion" key={ion.name}>
              {ion.icon}
            </div>
          ))}
        </div>

        <div className="setting ion">
          <Cog />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
