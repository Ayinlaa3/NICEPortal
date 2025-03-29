import Button from "../components/Button";
import { Worker } from "./Icons";

const WhoWeAre = () => {
  return (
    <section className="bg-(--accent) p-5">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5  items-center mx-auto justify-between max-w-[1200px]">
        {/* section 1  */}
        <div className="xl:w-[550px]">
          <h2 className="flex mb-10 items-center gap-2 text-(--primary) font-bold text-2xl">
            <Worker />
            <span className="capitalize">Who We Are</span>
          </h2>

          <h1 className="font-bold text-4xl mb-6">
            The Nigerian Institution of Civil Engineers (NICE)
          </h1>

          <p className="text-xl font-semibold mb-11">
            The Nigerian Institution of Civil Engineers, is the umbrella body of
            all Nigerian Civil Engineers. It is dedicated to promoting Civil
            Engineering profession and inter relationship with other branches of
            Engineering in Nigeria and diaspora. The Institution is made up of
            Professionals drawn from all fields of Civil Engineering including
            Construction Engineering, Structural Engineering, Highway
            Engineering, Geotechnics and Water Resources Engineering. NICE is
            the largest Division of the Nigerian Society of Engineers.
          </p>

          <Button>About NICE</Button>
        </div>
        {/* section 2  */}
        <div className="relative mx-auto max-w-[550px]  max-h-[760px]   bg-white  rounded-(--radius)">
          <img
            src="/images/chairman.png"
            alt="NICE National Chairman"
            className="object-cover w-full h-full rounded-(--radius)"
            draggable="false"
          />
          <div className="py-4 px-7 flex flex-col items-center border-b border-(--primary) bg-(--secondary-foreground) w-full rounded-[20px] absolute bottom-30 left-40 z-10">
            <span className="font-bold text-(--primary) text-2xl">
              Engr. Tokunbo Ajanaku, FNSE FNICE
            </span>
            <span className="text-[#FF531C] font-semibold text-xl">
              National Chairman - 2025/2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
