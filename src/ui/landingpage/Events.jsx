import Button from "@/components/ui/Button";
import EventCard from "../../components/EventCard";

const Events = () => {
  return (
    <div className="bg-(--accent) flex flex-col items-center gap-10 p-25 py-20">
      <h2 className="font-extrabold text-4xl">Upcoming Events</h2>

      <div className="grid mx-auto container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>

      <Button>View all Events</Button>
    </div>
  );
};

export default Events;
