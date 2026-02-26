import { useQuery } from "@tanstack/react-query";

import { fetchUserFilesCount } from "../api/fetchUserFilesCount.service";
import { CategoriesList } from "../components/Categories/CategoriesList";
import { DraggableFileUploader } from "../components/DraggableFileUploader";
import { RecentFilesTable } from "../components/RecentFilesTable";
import { SearchInput } from "../components/SearchInput";

export function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["file"],
    queryFn: fetchUserFilesCount,
  });

  return (
    <div className="flex flex-1 flex-col px-2">
      <h1 className="text-center text-3xl font-bold text-blue_primary underline">
        Dashboard
      </h1>
      <div className="w-full flex justify-center items-center py-5">
        <SearchInput />
      </div>
      <span className="flex flex-1 flex-col gap-10 pt-0">
        <div className="flex flex-col gap-7 rounded-lg pt-4 pb-10 px-8">
          <h1 className="text-2xl font-bold text-blue_primary">Categories</h1>
          <span className="flex flex-col justify-center items-center gap-10 w-full md:min-h-36 md:flex-row">
            <CategoriesList categories={data} isLoading={isLoading} />
          </span>
        </div>
        <div className="w-full flex justify-center items-center">
          <DraggableFileUploader />
        </div>
        <div className="flex flex-col gap-7 rounded-lg pt-4 pb-10 px-4 md:px-8">
          <h1 className="text-2xl font-bold text-blue_primary">Recent Files</h1>
          <RecentFilesTable />
        </div>
      </span>
    </div>
  );
}
