import EventCard from "../../components/EventCard";

const Events = () => {
  return (
    <div className="bg-(--accent) flex flex-col items-center gap-15 p-5 py-8">
      <h2 className="font-extrabold text-4xl">Upcoming Events</h2>

      <div className="grid mx-auto container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
