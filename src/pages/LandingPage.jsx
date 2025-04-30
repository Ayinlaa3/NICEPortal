import Banner from "../ui/landingpage/Banner.jsx";
import Events from "../ui/landingpage/Events.jsx";
import Navbar from "../ui/landingpage/Navbar.jsx";
import WhoWeAre from "../ui/landingpage/WhoWeAre.jsx";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <WhoWeAre />
      <div>Rating here</div>
      <Events />
    </div>
  );
};

export default LandingPage;
