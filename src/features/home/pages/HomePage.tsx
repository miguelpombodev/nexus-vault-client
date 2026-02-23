import { Image } from "lucide-react";

import { CategoryCard } from "../components/CategoryCard";
import { SearchInput } from "../components/SearchInput";

export function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-white aspect-video rounded-xl" />
        <div className="bg-white aspect-video rounded-xl" />
        <div className="bg-white aspect-video rounded-xl" />{" "}
      </div>
      {/* <div className="bg-white min-h-[100vh] flex-1 rounded-xl md:min-h-min" /> */}
      <div className="w-full flex justify-center items-center py-5">
        <SearchInput />
      </div>
      <div className="flex flex-col gap-5 bg-white rounded-lg pt-4 pb-10 px-8">
        <h1 className="text-lg font-bold text-gray-600">Categories</h1>
        <span className="flex flex-col justify-center items-center gap-10 w-full md:flex-row">
          <CategoryCard
            icon={<Image size={35} />}
            title="Images"
            count={12673173}
          />
          <CategoryCard
            icon={<Image size={35} />}
            title="Images"
            count={12673173}
          />
          <CategoryCard
            icon={<Image size={35} />}
            title="Images"
            count={12673173}
          />
        </span>
      </div>
    </div>
  );
}
