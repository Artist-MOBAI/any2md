import Source from "@/components/Source";
import Target from "@/components/Target";

export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_1fr] min-h-screen">
      <div className="border-r-2 border-mobai-black p-8 overflow-clip">
        <Source />
      </div>
      <div className="p-8 overflow-clip">
        <Target />
      </div>
    </div>
  );
}
