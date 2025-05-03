const QuickLinks = () => {
  const links = [
    {
      icon: "➕",
      title: "Join NICE",
      description: "Become a member and advance your career",
    },
    {
      icon: "🎓",
      title: "Training & Certifications",
      description: "Explore CPD courses and skill-building programs",
    },
    {
      icon: "📅",
      title: "Upcoming Events",
      description: "Register for conferences, workshops, and webinars",
    },
    {
      icon: "💳",
      title: "Payment Portal",
      description: "Experience seamless payment options",
    },
    {
      icon: "📚",
      title: "Publications & Resources",
      description: "Access research papers, journals, reports, and guidelines",
    },
    {
      icon: "💬",
      title: "Contact Support",
      description: "Do you need help with anything? Reach out to us anytime",
    },
  ];

  return (
    <section className="p-6 bg-gradient-to-r from-green-800 to-lime-400 text-black">
      <h2 className="text-white text-xl font-bold text-center mb-6">
        Quick Links
      </h2>

      <div className="bg-white rounded-t-xl shadow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border border-gray-200 overflow-hidden">
        {links.map((link, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-start gap-2 p-6 border-gray-200
              ${idx < 3 ? "border-b" : ""}
              ${idx % 3 !== 2 ? "border-r" : ""}
              sm:border-r
              sm:${idx >= 3 ? "border-b-0" : ""}
            `}
          >
            <span className="text-3xl">{link.icon}</span>
            <h3 className="font-semibold">{link.title}</h3>
            <p className="text-sm text-gray-600">{link.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-green-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-b-xl">
        <div>
          <p className="font-semibold">
            Your contribution fuels education, innovation, and development
          </p>
          <p className="text-sm">
            Donate towards scholarships, research, and capacity-building
            initiatives that shape the future of civil engineering in Nigeria.
          </p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded">
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default QuickLinks;
