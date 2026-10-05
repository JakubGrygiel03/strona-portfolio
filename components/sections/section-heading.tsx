export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium text-cobalt">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-heading sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-body">{description}</p>
    </div>
  );
}
