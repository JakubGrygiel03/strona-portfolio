export function ArchitectureFlow({
  flow,
  pattern,
  schema,
  stack,
}: {
  flow: string[];
  pattern: string;
  schema: string[];
  stack: string[];
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6">
      <p className="text-sm text-success">{pattern}</p>
      <ol className="mt-6 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
        {flow.map((step, index) => (
          <li key={step} className="flex items-center gap-3">
            <span className="rounded-xl border border-line bg-obsidian px-3 py-2 text-sm text-heading">{step}</span>
            {index < flow.length - 1 ? (
              <span aria-hidden="true" className="rotate-90 text-muted md:rotate-0">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-medium text-heading">Co jest zapisane</h3>
          <ul className="mt-3 space-y-2 text-sm text-body">
            {schema.map((table) => (
              <li key={table}>{table}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium text-heading">Z czego to jest</h3>
          <ul className="mt-3 space-y-2 text-sm text-body">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
