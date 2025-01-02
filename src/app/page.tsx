import Source from "@/components/Source";
import Target from "@/components/Target";
import TitleBar from "@/components/TitleBar";

const Home = () => {
  return (
    <div className="font-pixel">
      <TitleBar />
      <div className="grid min-h-screen grid-rows-[1fr_1fr] sm:grid-cols-[1fr_1fr] sm:grid-rows-none">
        <div className="cursor-default overflow-clip border-b-2 border-mobai-black hover:bg-mobai-black hover:text-mobai-yellow sm:border-b-0 sm:border-r-2">
          <div className="pt-8">
            <Source />
          </div>
        </div>
        <div className="overflow-clip pt-8">
          <Target />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-30 flex h-16 cursor-default items-center justify-center text-3xl">
        Any2md @Artist-MOBAI
      </div>
    </div>
  );
};

export default Home;
