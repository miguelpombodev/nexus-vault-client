import { File, FileMusic, FilePenLine, Image } from "lucide-react";

import { Skeleton } from "@/shared/components/ui/skeleton";

import type { UserFilesCount } from "../../types/responses/userFilesCount.type";

import { CategoryCard } from "./CategoryCard";

type CategoriesListProps = {
  categories: UserFilesCount | undefined;
  isLoading: boolean;
};

export function CategoriesList({ categories, isLoading }: CategoriesListProps) {
  return (
    <>
      {categories && !isLoading ? (
        <>
          <CategoryCard
            icon={<Image size={35} className="text-white" />}
            title="Images"
            count={categories.imageFiles}
          />
          <CategoryCard
            icon={<FilePenLine size={35} className="text-white" />}
            title="Documents"
            count={categories.documentFiles}
          />
          <CategoryCard
            icon={<FileMusic size={35} className="text-white" />}
            title="Media"
            count={categories.mediaFiles}
          />
          <CategoryCard
            icon={<File size={35} className="text-white" />}
            title="Others"
            count={categories.otherFiles}
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
    </>
  );
}
