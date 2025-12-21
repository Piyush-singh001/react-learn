import Card from "./components/Card";

const App = () => {
  const hiringCompanies = [
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      daysAgo: 2,
      workRole: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Role",
      pay: "₹18 LPA",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://i.pinimg.com/736x/a4/8f/41/a48f416986eb5b30c5ed41efc9ef10ab.jpg",
      companyName: "Amazon",
      daysAgo: 5,
      workRole: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Role",
      pay: "₹16 LPA",
      location: "Goa, India",
    },
    {
      brandLogo:
        "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      daysAgo: 1,
      workRole: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Role",
      pay: "₹25 LPA",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
      companyName: "Meta",
      daysAgo: 3,
      workRole: "React Developer",
      tag1: "Full Time",
      tag2: "Senior Role",
      pay: "₹30 LPA",
      location: "Remote",
    },
    {
      brandLogo:
        "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:286,cw:736,ch:736,q:80,w:736/BDvqkcvVLHBu6xZ5yaN7jQ.jpg",
      companyName: "Netflix",
      daysAgo: 7,
      workRole: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Role",
      pay: "₹35 LPA",
      location: "Remote",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      companyName: "Microsoft",
      daysAgo: 4,
      workRole: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Junior Role",
      pay: "₹20 LPA",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/020/336/484/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
      companyName: "Tesla",
      daysAgo: 6,
      workRole: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Role",
      pay: "₹28 LPA",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2HJrqfMUhsx9kEgJi4gv_6ngSt2ghDGfVIg&s",
      companyName: "Uber",
      daysAgo: 2,
      workRole: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Role",
      pay: "₹22 LPA",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicMDzk5BVKCMaspR4wow1fC8Kt9fDI-ACBg&s",
      companyName: "Airbnb",
      daysAgo: 8,
      workRole: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Role",
      pay: "₹32 LPA",
      location: "Remote",
    },
    {
      brandLogo:
        "https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo.png",
      companyName: "LinkedIn",
      daysAgo: 3,
      workRole: "MERN Stack Developer",
      tag1: "Full Time",
      tag2: "Junior Role",
      pay: "₹19 LPA",
      location: "Bangalore, India",
    },
  ];

  return (
    <div className="parent">
      {hiringCompanies.map((elem, index) => {
        return (
          <Card
            key={index}
            brandLogo={elem.brandLogo}
            companyName={elem.companyName}
            daysAgo={elem.daysAgo}
            workRole={elem.workRole}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        );
      })}
    </div>
  );
};

export default App;
