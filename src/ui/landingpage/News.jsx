import Button from "../../components/Button";
import NewsCard from "../../components/NewsCard";

const newsItems = [
  {
    title:
      "NICE embarks on Nationwide Walk Against Building Collapse in over 30 States in one day",
    category: "Institutional News",
    date: "27 January 2025",
    image: "/images/news1.png",
  },
  {
    title:
      "FG Allocates ₦89.2 Billion for Road and Infrastructure Development in FCT",
    category: "Infrastructure News",
    date: "30 January 2025",
    image: "/images/news1.png",
  },
  {
    title: "How to kickstart your career in Sustainability-Tech",
    category: "Blog",
    date: "02 February 2025",
    image: "/images/news1.png",
  },
  {
    title:
      "NICE OSUN CHAPTER paid Technical Visit to Redeemer University Ede, Osun State",
    category: "Chapters News",
    date: "11 February 2025",
    image: "/images/news1.png",
  },
];

const NewsSection = () => {
  return (
    <section className="py-12 mt-60 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Latest News & Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {newsItems.map((item, idx) => (
            <NewsCard item={item} key={idx} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button>See More News</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
