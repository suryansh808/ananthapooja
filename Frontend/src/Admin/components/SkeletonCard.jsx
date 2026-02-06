export const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-amber-100 overflow-hidden animate-pulse">
      <div className="h-48 bg-amber-200" />
      <div className="p-5 space-y-3">
        <div className="h-5 bg-amber-200 rounded w-2/3" />
        <div className="h-4 bg-amber-100 rounded w-1/2" />
        <div className="h-4 bg-amber-100 rounded w-1/3" />
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-amber-200 rounded-full" />
          <div className="h-6 w-20 bg-amber-200 rounded-full" />
        </div>
      </div>
    </div>
  );
};
