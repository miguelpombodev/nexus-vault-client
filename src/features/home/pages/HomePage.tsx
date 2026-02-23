import { Image } from "lucide-react";

import { CategoryCard } from "../components/CategoryCard";
import { DraggableFileUploader } from "../components/DraggableFileUploader";
import { SearchInput } from "../components/SearchInput";

export function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <h1 className="text-center text-3xl font-bold text-blue_primary underline">
        Dashboard
      </h1>
      <div className="w-full flex justify-center items-center py-5">
        <SearchInput />
      </div>
      <span className="flex flex-1 flex-col gap-10 p-4 pt-0">
        <div className="">
          <h1 className="text-2xl font-bold text-blue_primary mb-7">
            File Manager
          </h1>
          <span className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-blue_primary aspect-video rounded-xl" />
            <div className="bg-blue_primary aspect-video rounded-xl" />
            <div className="bg-blue_primary aspect-video rounded-xl" />
          </span>
        </div>
        <div className="w-full flex justify-center items-center">
          <DraggableFileUploader />
        </div>
        <div className="flex flex-col gap-7 rounded-lg pt-4 pb-10 px-8">
          <h1 className="text-2xl font-bold text-blue_primary">Categories</h1>
          <span className="flex flex-col justify-center items-center gap-10 w-full md:flex-row">
            <CategoryCard
              icon={<Image size={35} className="text-white" />}
              title="Images"
              count={12673173}
            />
            <CategoryCard
              icon={<Image size={35} className="text-white" />}
              title="Images"
              count={12673173}
            />
            <CategoryCard
              icon={<Image size={35} className="text-white" />}
              title="Images"
              count={12673173}
            />
          </span>
        </div>
      </span>
    </div>
  );
}
