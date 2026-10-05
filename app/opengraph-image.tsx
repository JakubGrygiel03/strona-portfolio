import { ImageResponse } from "next/og";
import { OgCard } from "@/components/seo/og-card";
import { loadOgFonts } from "@/lib/og-font";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    <OgCard kicker={siteConfig.role} title="Strony, które sprzedają." detail="Next.js · TypeScript · Supabase" />,
    { ...size, fonts },
  );
}
