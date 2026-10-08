const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

const hits = new Map<string, { count: number; reset: number }>();

export function allowInquiry(key: string): boolean {
  const now = Date.now();
  const current = hits.get(key);

  if (!current || current.reset <= now) {
    hits.set(key, { count: 1, reset: now + WINDOW_MS });
    return true;
  }

  current.count += 1;

  if (hits.size > 500) {
    for (const [id, entry] of hits) {
      if (entry.reset <= now) hits.delete(id);
    }
  }

  return current.count <= MAX_HITS;
}
