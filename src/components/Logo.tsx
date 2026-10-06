import { brand } from "@/content/config";
import { logoPath, logoViewBox } from "./logoPath";

// Logotipo oficial. Toma el color del texto (currentColor) para poder
// usarse en lima sobre oscuro o en oscuro sobre claro.
export function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label={brand.name}
      viewBox={logoViewBox}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d={logoPath} />
    </svg>
  );
}
