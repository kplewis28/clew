import { ImageResponse } from "next/og";
import { logoPath, logoViewBox } from "@/components/logoPath";
import { dictionaries } from "@/content";
import { isLocale } from "@/content/config";

const size = { width: 1200, height: 630 };

// Un solo OG por idioma, con el texto alternativo en ese idioma.
export async function generateImageMetadata({
  params,
}: {
  params: { lang: string } | Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = dictionaries[isLocale(lang) ? lang : "es"];
  return [{ id: "og", alt: t.seo.ogAlt, size, contentType: "image/png" }];
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { hero } = dictionaries[isLocale(lang) ? lang : "es"];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#0f150f",
        color: "#ffffff",
      }}
    >
      <svg width="300" height="70" viewBox={logoViewBox} fill="#dfff6a">
        <path d={logoPath} />
      </svg>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 72, letterSpacing: -3, lineHeight: 1.05 }}>
          {hero.titleStart}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            letterSpacing: -3,
            lineHeight: 1.05,
            color: "#dfff6a",
          }}
        >
          {hero.titleHighlight}
        </div>
      </div>
    </div>,
    size,
  );
}
