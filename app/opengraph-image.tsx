import { ImageResponse } from "next/og";
import { OgCard } from "@/components/seo/og-card";
import { loadOgFonts } from "@/lib/og-font";
import { siteConfig } from "@/lib/site";

export const alt = "GrygielStudio — szybkie strony bez szablonu i bez abonamentu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const fonts = await loadOgFonts();
  const domain = new URL(siteConfig.url).host;

  return new ImageResponse(
    (
      <OgCard
        kicker="Przyjmuję projekty na bieżący miesiąc"
        title={siteConfig.headline}
        detail={siteConfig.name}
        domain={domain}
      />
    ),
    { ...size, fonts },
  );
}
