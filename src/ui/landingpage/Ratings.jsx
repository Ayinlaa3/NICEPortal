import CountUp from "react-countup";

const Ratings = () => {
  return (
    <div className="flex *:flex *:flex-col *:not-[:last-child]:border-r-2 *:border-(--muted) justify-between py-10  *:gap-2 *:items-center *:p-20 *:py-0">
      <div>
        <Rating number={7000} />
        <span>Registered members</span>
      </div>
      <div>
        <Rating number={7000} />
        <span>Nice members</span>
      </div>
      <div>
        <Rating number={500} />
        <span>Research Publications</span>
      </div>
      <div>
        <span className="text-4xl font-bold text-(--border)">2001</span>
        <span>Year Established</span>
      </div>
    </div>
  );
};
export default Ratings;
const Rating = ({ number }) => {
  return (
    <CountUp
      className="text-4xl font-bold text-(--border)"
      end={number}
      duration={2.2}
      valueStart={0}
      enableScrollSpy={true}
      scrollSpyOnce={true}
      scrollSpyDelay={200}
      scrollSpyThrottle={1000}
      suffix="+"
    />
  );
};
