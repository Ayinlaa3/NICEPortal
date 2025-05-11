import Button from "../../components/Button";

const Partnership = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-10 px-40 bg-no-repeat bg-cover bg-center bg-[url('/images/partnership-bg.png')] relative">
      <h2 className="font-extrabold text-4xl">Partnership & Sponsorship</h2>
      <p className="text-xl text-center">
        We believe that strong partnerships create lasting impact. By
        collaborating with industry leaders, corporations, and <br />
        institutions, we drive innovation, research, and capacity-building to
        shape the future of Nigeria&apos;s built environment.
      </p>

      <Button>Become a Partner</Button>
    </div>
  );
};

export default Partnership;
