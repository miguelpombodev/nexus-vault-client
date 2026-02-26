type CategorieCardProps = {
  icon: React.ReactNode;
  title: string;
  count: number;
};

export function CategoryCard({ icon, title, count }: CategorieCardProps) {
  return (
    <div className="w-full flex flex-col bg-blue_primary rounded-lg p-5 gap-5 md:w-1/3">
      {icon}
      <span>
        <h3 className="font-bold text-white">{title}</h3>
        <span className="text-white">{count} files</span>
      </span>
    </div>
  );
}
