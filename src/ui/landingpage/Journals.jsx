import Button from "@/components/ui/Button";

const Journals = () => {
  const arr = Array(3).fill(null);
  return (
    <div className="bg-no-repeat bg-cover bg-center bg-[url('/images/journal-bg.png')] relative p-5 py-8">
      <article className="flex flex-col items-center relative gap-15 z-10">
        <h2 className="font-extrabold text-(--background) text-4xl">
          Latest Publications
        </h2>
        <div className="flex items-center justify-center gap-15">
          {arr.map((_, i) => {
            return <img key={i} src="/images/journal.png" alt="Journal" />;
          })}
        </div>

        <Button variant="tertiary">View all Publications</Button>
      </article>
      <div className="bg-linear-90 to-[#fef103b2] from-0% from-[#03823a] to-100% absolute inset-0" />
    </div>
  );
};

export default Journals;
