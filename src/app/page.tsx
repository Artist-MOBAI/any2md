import Source from "@/components/Source";
import Target from "@/components/Target";

const Home = () => {
  return (
    <div className="grid min-h-screen grid-rows-[1fr_1fr] sm:grid-cols-[1fr_1fr] sm:grid-rows-none">
      <div className="overflow-clip border-b-2 border-mobai-black pt-8 sm:border-b-0 sm:border-r-2">
        <Source />
      </div>
      <div className="overflow-clip pt-8">
        <Target />
      </div>
    </div>
  );
};

export default Home;
