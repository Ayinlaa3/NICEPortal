import { Calender, Clock, Location, StarIcon } from "../ui/Icons";
import Tag from "./Tag";

const EventCard = () => {
  return (
    <div className="bg-white cursor-pointer hover:shadow-lg rounded-xl overflow-hidden">
      <img
        src="/images/card_img.png"
        alt="Outreach"
        className="w-full object-cover object-center"
      />
      <article className="flex flex-col gap-2 px-6 py-4">
        <Tag tag="Outreach" />

        <h2 className="text-[var(--primary)] font-bold text-lg leading-6">
          NICE SouthWest Regional Build-Right Workshop
        </h2>

        <ul className="text-md border-t mt-4 space-y-2 pt-3 **:flex **:items-center **:gap-2.5">
          <li>
            <Location /> UI Conference Centre, Ibadan
          </li>
          <li>
            <Calender /> 15 March 2025
          </li>
          <li>
            <Clock /> 10:00 AM - 2:00 PM WAT
          </li>
        </ul>
      </article>
    </div>
  );
};

export default EventCard;