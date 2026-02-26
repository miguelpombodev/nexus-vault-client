import { useQuery } from "@tanstack/react-query";
import { File, FileMusic, FilePenLine, Image } from "lucide-react";

import { Skeleton } from "@/shared/components/ui/skeleton";

import { fetchUserFilesCount } from "../api/fetchUserFilesCount.service";
import { CategoryCard } from "../components/CategoryCard";
import { DraggableFileUploader } from "../components/DraggableFileUploader";
import { RecentFilesTable } from "../components/RecentFilesTable";
import { SearchInput } from "../components/SearchInput";

export function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["file"],
    queryFn: fetchUserFilesCount,
  });

  return (
    <div className="flex flex-1 flex-col">
      <h1 className="text-center text-3xl font-bold text-blue_primary underline">
        Dashboard
      </h1>
      <div className="w-full flex justify-center items-center py-5">
        <SearchInput />
      </div>
      <span className="flex flex-1 flex-col gap-10 p-4 pt-0">
        <div className="flex flex-col gap-7 rounded-lg pt-4 pb-10 px-8">
          <h1 className="text-2xl font-bold text-blue_primary">Categories</h1>
          <span className="flex flex-col justify-center items-center gap-10 w-full md:min-h-36 md:flex-row">
            {data && !isLoading ? (
              <>
                <CategoryCard
                  icon={<Image size={35} className="text-white" />}
                  title="Images"
                  count={data.imageFiles}
                />
                <CategoryCard
                  icon={<FilePenLine size={35} className="text-white" />}
                  title="Documents"
                  count={data.documentFiles}
                />
                <CategoryCard
                  icon={<FileMusic size={35} className="text-white" />}
                  title="Media"
                  count={data.mediaFiles}
                />
                <CategoryCard
                  icon={<File size={35} className="text-white" />}
                  title="Others"
                  count={data.otherFiles}
                />
              </>
            ) : (
              <>
                <Skeleton className="w-full min-h-36 md:h-full md:w-1/3 flex flex-col bg-blue_primary rounded-lg p-5 gap-5" />
                <Skeleton className="w-full min-h-36 md:h-full md:w-1/3 flex flex-col bg-blue_primary rounded-lg p-5 gap-5" />
                <Skeleton className="w-full min-h-36 md:h-full md:w-1/3 flex flex-col bg-blue_primary rounded-lg p-5 gap-5" />
                <Skeleton className="w-full min-h-36 md:h-full md:w-1/3 flex flex-col bg-blue_primary rounded-lg p-5 gap-5" />
              </>
            )}
          </span>
        </div>
        <div className="w-full flex justify-center items-center">
          <DraggableFileUploader />
        </div>
        <div className="flex flex-col gap-7 rounded-lg pt-4 pb-10 px-8">
          <h1 className="text-2xl font-bold text-blue_primary">Recent Files</h1>
          <RecentFilesTable />
        </div>
      </span>
    </div>
  );
}
