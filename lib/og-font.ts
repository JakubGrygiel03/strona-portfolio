import { readFile } from "node:fs/promises";
import { join } from "node:path";

const filesDir = join(process.cwd(), "node_modules/@fontsource/inter/files");

export async function loadOgFonts() {
  const [latin, latinExt] = await Promise.all([
    readFile(join(filesDir, "inter-latin-600-normal.woff")),
    readFile(join(filesDir, "inter-latin-ext-600-normal.woff")),
  ]);

  return [
    { name: "Inter", data: latin, weight: 600 as const, style: "normal" as const },
    { name: "Inter", data: latinExt, weight: 600 as const, style: "normal" as const },
  ];
}
