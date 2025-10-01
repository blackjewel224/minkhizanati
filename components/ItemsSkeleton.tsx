export function ItemsSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="animate-pulse space-y-3 rounded-3xl bg-white p-4 shadow-sm">
          <div className="h-48 rounded-2xl bg-sand-200" />
          <div className="h-4 w-1/2 rounded-full bg-sand-200" />
          <div className="h-4 w-2/3 rounded-full bg-sand-200" />
          <div className="h-4 w-1/3 rounded-full bg-sand-200" />
        </div>
      ))}
    </div>
  );
}
