import Advertisment from "../ui/landingpage/Advertisment.jsx";
import Banner from "../ui/landingpage/Banner.jsx";
import Events from "../ui/landingpage/Events.jsx";
import Journals from "../ui/landingpage/Journals.jsx";
import Navbar from "../ui/landingpage/Navbar.jsx";
import NewsSection from "../ui/landingpage/News.jsx";
import Partnership from "../ui/landingpage/Partnership.jsx";
import QuickLinks from "../ui/landingpage/QuickLinks.jsx";
import Ratings from "../ui/landingpage/Ratings.jsx";
import FeaturedSpotlights from "../ui/landingpage/Spotlight.jsx";
import Testimonial from "../ui/landingpage/Testimonials.jsx";
import WhoWeAre from "../ui/landingpage/WhoWeAre.jsx";
import Footer from "../ui/landingpage/Footer.jsx";
import YoungEngineersCorner from "../ui/landingpage/YoungEngineersCorner.jsx";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <WhoWeAre />
      <Ratings />
      <Events />
      <Journals />
      <Partnership />
      <QuickLinks />
      <NewsSection />
      <YoungEngineersCorner />
      <Advertisment />
      <FeaturedSpotlights />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default LandingPage;
