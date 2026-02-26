export function RecentFilesTable() {
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
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-[2fr_1fr_2fr_1fr]
                           place-items-center
                           border-b border-blue_primary
                           py-4 px-6"
              >
                <span>File name with icon</span>
                <span>12/02/2025</span>
                <span>Teste teste teste</span>
                <span>PDF</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
