const NewsCard = ({ item }) => {
  return (
    <div className="bg-green-700 text-white rounded shadow cursor-pointer hover:shadow-xl">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col">
        <p className="italic text-sm flex items-start mb-2">
          <span className="mr-2">📢</span>
          {item.category}
        </p>
        <h3 className="text-md font-semibold mb-4 h-[3lh] line-clamp-3">
          {item.title}
        </h3>
        <hr className="border-green-300 mb-2" />
        <p className="text-sm">{item.date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
