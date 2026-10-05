import { Skeleton } from "@/components/ui/skeleton";

export default function CaseStudyLoading() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-6 py-16">
      <Skeleton className="h-4 w-28" />
      <Skeleton className="h-12 w-1/2" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-80 w-full" />
    </div>
  );
}
