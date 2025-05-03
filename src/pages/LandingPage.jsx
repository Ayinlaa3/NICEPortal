import Banner from "../ui/landingpage/Banner.jsx";
import Events from "../ui/landingpage/Events.jsx";
import Journals from "../ui/landingpage/Journals.jsx";
import Navbar from "../ui/landingpage/Navbar.jsx";
import QuickLinks from "../ui/landingpage/QuickLinks.jsx";
import Ratings from "../ui/landingpage/Ratings.jsx";
import WhoWeAre from "../ui/landingpage/WhoWeAre.jsx";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <WhoWeAre />
      <Ratings />
      <Events />
      <Journals />
      <QuickLinks />
    </div>
  );
};

export default LandingPage;
