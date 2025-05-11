import { FaBriefcase, FaUniversity, Grants, UserTie } from "../Icons";

const cards = [
  {
    icon: <UserTie className="text-orange-600 text-xl" />,
    text: "Get matched to a Mentor",
  },
  {
    icon: <Grants className="text-orange-600 text-xl" />,
    text: "Explore Scholarships & Grants",
  },
  {
    icon: <FaUniversity className="text-orange-600 text-xl" />,
    text: "Join NICESA in your Campus",
  },
  {
    icon: <FaBriefcase className="text-orange-600 text-xl" />,
    text: "Apply for Jobs and Internships",
  },
];

const YoungEngineersCorner = () => {
  return (
    <section className="relative h-90 bg-green-800 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Young Engineers Corner
        </h2>
        <div className="bg-white text-green-800 px-6 py-2 rounded-full font-semibold text-sm sm:text-base mb-6 shadow">
          Bridging Knowledge & Opportunity for Future Civil Engineers
        </div>
        <p className="max-w-3xl text-sm sm:text-base">
          As a student or recent graduate of civil engineering, your journey
          toward a successful career starts here. The Nigerian Institution of
          Civil Engineers is deeply committed to supporting and guiding you as
          you transition from learning to leadership in the industry.
        </p>
      </div>

      <div className="w-8/10 absolute -bottom-10 z-20 left-1/2 -translate-x-1/2 mx-auto mt-8 bg-white rounded-xl shadow-md grid grid-cols-2  md:grid-cols-4 gap-4 p-4 text-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col  lg:flex-row items-center justify-center gap-2 px-4 py-3
      ${index !== cards.length - 1 ? "border-r border-gray-300" : ""}
      ${index === 1 ? "border-r-0 md:border-r" : ""}
    `}
          >
            <div>{card.icon}</div>
            <p className="text-sm font-medium text-gray-800">{card.text}</p>
          </div>
        ))}
      </div>

      {/* Decorative images if needed */}
      <div className="absolute left-0 top-0 h-full w-1/3 bg-[url('/images/right.png')] bg-cover bg-top hidden sm:block" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[url('/images/left.png')] bg-cover bg-top  hidden sm:block" />
    </section>
  );
};

export default YoungEngineersCorner;
