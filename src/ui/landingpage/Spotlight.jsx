import Button from "@/components/ui/Button";
import SpotlightCard from "../../components/SpotlightCard";

const spotlightData = [
  {
    title: "Iconic Infrastructure of the Year",
    category: "Spotlight",
    description:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
    image: "/images/news.png",
  },
  {
    title: "Civil Engineer of the Month",
    category: "Recognitions",
    description:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
    image: "/images/news.png",
  },
  {
    title: "Young Civil Engineer of the Month",
    category: "Recognitions",
    description:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
    image: "/images/news.png",
  },
  {
    title: "Best Chapter of the Year",
    category: "Group Dynamics",
    description:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
    image: "/images/news.png",
  },
  {
    title: "Corporate Partner of the Year",
    category: "Awards",
    description:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
    image: "/images/news.png",
  },
  {
    title: "Best Chapter Award",
    category: "Awards",
    description:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
    image: "/images/news.png",
  },
];

const FeaturedSpotlights = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          Featured Spotlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spotlightData.map((item, index) => (
            <SpotlightCard item={item} key={index} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button>Submit Nominations</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpotlights;
