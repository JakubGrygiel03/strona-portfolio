import { Skeleton } from "@/components/ui/skeleton";

export default function WycenaLoading() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-6 py-16">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-12 w-2/3" />
      <Skeleton className="h-96 w-full" />
    </div>
  );
}
