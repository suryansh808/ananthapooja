const TableSkeleton = () => {
  return (
    <div className="animate-pulse space-y-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-12 bg-gray-200 rounded"></div>
      ))}
    </div>
  );
};

export default TableSkeleton;
