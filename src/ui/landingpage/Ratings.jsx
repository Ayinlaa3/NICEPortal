import CountUp from "react-countup";

const Ratings = () => {
  return (
    <div className="flex *:flex *:flex-col items-center justify-between py-10  gap-4  *:gap-2 *:items-center  container mx-auto px-40">
      <div>
        <Rating number={7000} />
        <span>Registered members</span>
      </div>
      <Vr />
      <div>
        <Rating number={7000} />
        <span>Nice members</span>
      </div>
      <Vr />
      <div>
        <Rating number={500} />
        <span>Research Publications</span>
      </div>
      <Vr />

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

const Vr = () => {
  return <div className="h-10 w-[1px] bg-(--muted)" />;
};
