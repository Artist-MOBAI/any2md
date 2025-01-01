import Source from "@/components/Source";
import Target from "@/components/Target";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_1fr] sm:grid-rows-none sm:grid-cols-[1fr_1fr] min-h-screen">
      <div className="pt-8 border-mobai-black border-b-2 overflow-clip sm:border-b-0 sm:border-r-2">
        <Source />
      </div>
      <div className="pt-8 overflow-clip">
        <Target />
      </div>
    </div>
  );
}
