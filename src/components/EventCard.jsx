import { Calender, Clock, Location, StarIcon } from "../ui/Icons";

const EventCard = () => {
  return (
    <div className="bg-white cursor-pointer hover:shadow-lg rounded-(--radius) overflow-hidden">
      <img
        src="/images/card_img.png"
        alt="Outreach"
        className="w-full object-cover object-center"
      />
      <article className="flex flex-col gap-2 px-10 py-5">
        <Tag tag="Outreach" />

        <h2 className="text-(--primary) font-bold text-lg leading-6">
          NICE SouthWest Regional Build-Right Workshop
        </h2>

        <ul
          className="text-md border-t mt-5 space-y-2 py-2 **:flex **:items-center **:gap-2.5"
          id="event-details"
        >
          <li>
            <Location />
            UI Conference Centre, Ibadan
          </li>
          <li>
            <Calender />
            15 March 2025
          </li>
          <li>
            <Clock />
            10:00 AM - 2:00 PM WAT
          </li>
        </ul>
      </article>
    </div>
  );
};

export default EventCard;

const Tag = ({ tag }) => {
  return (
    <div className="flex">
      <div className="bg-(--primary) p-2">
        <StarIcon />
      </div>
      <div className="p-2 bg-(--accent) font-bold text-[12px]">{tag}</div>
    </div>
  );
};
