import { Button } from "@headlessui/react";
import TestimonialCard from "../../components/TestimonialCard";
import { ArrowLeft, ArrowRight } from "../Icons";

const Testimonial = () => {
  // In a real carousel, you'd manage state for the current index
  const stories = [
    {
      name: "Engr. John Lark Doe, FNISE FNICE",
      quote:
        "Being a member of NICE has helped me improve on my professional skills and relevance in the built industry.",
      imageSrc: "/images/Ellipse.png", // Replace with actual image path
    },
    {
      name: "Engr. John Lark Doe, FNISE FNICE",
      quote:
        "Being a member of NICE has helped me improve on my professional skills and relevance in the built industry.",
      imageSrc: "/images/Ellipse.png", // Replace with actual image path
    },
    {
      name: "Engr. John Lark Doe, FNISE FNICE",
      quote:
        "Being a member of NICE has helped me improve on my professional skills and relevance in the built industry.",
      imageSrc: "/images/Ellipse.png", // Replace with actual image path
    },
  ];

  return (
    <div className="bg-white py-12 relative bg-no-repeat bg-cover bg-center bg-[url('/images/testimonial-bg.png')]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Success Stories
        </h2>
        <div className="relative">
          <div className="flex items-center justify-center gap-4 grow">
            <Button className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:shadow-lg transition duration-300 ease-in-out rounded-full active:scale-90">
              <ArrowLeft />
            </Button>
            {stories.map((story, index) => (
              <TestimonialCard key={index} {...story} />
            ))}
            <Button className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:shadow-lg transition duration-300 ease-in-out rounded-full active:scale-90">
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-linear-90 to-[#fef10367] from-0% from-[#03823ac0] to-100% absolute inset-0" />
    </div>
  );
};

export default Testimonial;
