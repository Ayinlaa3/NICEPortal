import Button from "../components/Button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Worker,
  Youtube,
} from "./Icons";

const WhoWeAre = () => {
  return (
    <section className="bg-(--accent) p-5 py-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* section 1  */}
        <div className="lg:w-1/2">
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

          <Button className="mb-10">About NICE</Button>

          <div className="flex items-center gap-3">
            <img src="/icons/logo.svg" className="size-20" alt="NICE Logo" />{" "}
            <span className="text-(--primary) font-bold text-lg">NICE HQ</span>
            <div className="h-[73px] w-[2px] bg-(--muted)" />
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Linkedin />
            </a>
            <a href="#">
              <Youtube />
            </a>
          </div>
        </div>
        {/* section 2  */}
        <div className="relative lg:h-[600px] lg:w-1/2  bg-white  rounded-(--radius)">
          <img
            src="/images/chairman.png"
            alt="NICE National Chairman"
            className="object-cover w-full h-full rounded-(--radius)"
            draggable="false"
          />
          <div className="py-4 px-7 flex flex-col items-center border-b border-(--primary) bg-(--secondary-foreground) w-full rounded-[20px] absolute bottom-30 left-0 2xl:left-40 z-10">
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
