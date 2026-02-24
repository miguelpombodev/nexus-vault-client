export function RecentFilesTable() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-4 place-items-center border-b border-gray-400 bg-gray-200 text-blue_primary font-bold py-2 rounded-t-xl px-6">
        <span>File name</span>
        <span>Date</span>
        <span>Description</span>
        <span>Extension</span>
      </div>

      <div className="flex flex-col border-blue_primary text-blue_primary font-medium last:border-b-0">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-4 place-items-center border-b border-blue_primary py-4 px-6"
          >
            <span>File name with icon</span>
            <span>12/02/2025</span>
            <span>Teste teste teste</span>
            <span>PDF</span>
          </div>
        ))}
      </div>
    </div>
  );
}
