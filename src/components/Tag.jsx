import { StarIcon } from "../ui/Icons";

const Tag = ({ tag }) => {
  return (
    <div className="flex rounded overflow-hidden text-xs font-bold">
      <div className="bg-[var(--primary)] p-2">
        <StarIcon />
      </div>
      <div className="p-2 bg-[var(--accent)]">{tag}</div>
    </div>
  );
};

export default Tag;
