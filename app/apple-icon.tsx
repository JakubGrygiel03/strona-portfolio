import { ImageResponse } from "next/og";
import { StudioMark } from "@/components/seo/studio-mark";
import { loadOgFonts } from "@/lib/og-font";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const fonts = await loadOgFonts();

  return new ImageResponse(<StudioMark size={size.width} />, { ...size, fonts });
}
