import { Certificate, Partner, Plus, Search, Secure } from "../Icons";

const Banner = () => {
  return (
    <div className="container p-20 flex flex-col gap-10">
      <h2 className="font-extrabold text-5xl text-(--primary)">
        Sustaining the World&apos;s <br /> Infrastructure
      </h2>
      <p className="text-2xl font-medium max-w-[735px]">
        Engineering a stronger, smarter future. The Nigerian Institution of
        Civil Engineers empowers civil engineers with the knowledge, tools, and
        network to build resilient communities and drive innovation. Together,
        we shape tomorrow&apos;s infrastructure.
      </p>

      <div
        className="text-xl rounded-2xl font-bold flex gap-2 *:flex *:items-center *:gap-2 *:px-2 p-3 border-3 border-t-0 w-fit border-(--border)"
        id="quickLinks"
      >
        <a href="#">
          <Plus /> Join NICE
        </a>
        <a href="#">
          <Search /> Find A Member
        </a>
        <a href="#">
          <Certificate /> Browse Courses
        </a>
        <a href="#">
          <Partner /> Donate Now
        </a>
        <a href="#">
          <Secure /> Make Payment
        </a>
      </div>
    </div>
  );
};

export default Banner;
