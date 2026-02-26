import { handleSelectedFileIcon } from "@/shared/utils/icons.utils";
import { truncateString } from "@/shared/utils/names.utils";

import type { UserRecentFile } from "../types/responses/userRecentFile.type";

type RecentFilesTableProps = {
  recentFiles: UserRecentFile[] | undefined;
};

export function RecentFilesTable({ recentFiles }: RecentFilesTableProps) {
  const truncatedFileNameStringLength = 25;

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          <div
            className="grid grid-cols-[2fr_1fr_2fr_1fr] place-items-center
                          bg-gray-200 text-blue_primary font-bold
                          py-3 px-6 border-b border-gray-400
                          sticky top-0 z-10"
          >
            <span>File name</span>
            <span>Date</span>
            <span>Description</span>
            <span>Extension</span>
          </div>

          <div className="flex flex-col text-blue_primary font-medium">
            {recentFiles &&
              recentFiles.map((file) => {
                const Icon = handleSelectedFileIcon(file.extension);

                return (
                  <div
                    key={file.id}
                    className="grid grid-cols-[2fr_1fr_2fr_1fr]
                           place-items-center
                           border-b border-blue_primary
                           py-4 px-6"
                  >
                    <span className="flex w-full gap-2 items-start text-blue_primary">
                      <Icon size={25} />
                      <span>
                        {truncateString(
                          file.filename,
                          truncatedFileNameStringLength,
                        )}
                      </span>
                    </span>
                    <span>{file.date}</span>
                    <span>{file.description}</span>
                    <span className="font-bold">{file.extension}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
