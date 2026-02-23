type CategorieCardProps = {
  icon: React.ReactNode;
  title: string;
  count: number;
};

export function CategoryCard({ icon, title, count }: CategorieCardProps) {
  return (
    <div className="w-full md:w-1/3 flex flex-col border border-gray-500 rounded-lg p-5 gap-5">
      {icon}
      <span>
        <h3 className="font-bold">{title}</h3>
        <span>{count} files</span>
      </span>
    </div>
  );
}
