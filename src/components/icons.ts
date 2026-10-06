import {
  BellRing,
  Boxes,
  Calculator,
  ChartColumn,
  ClipboardList,
  LayoutDashboard,
  Repeat,
  Shuffle,
  Sparkle,
  SquareStack,
  TrendingUp,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";

// Claves de icono usadas en content/site.ts
export const icons = {
  repeat: Repeat,
  scattered: Shuffle,
  error: TriangleAlert,
  orders: ClipboardList,
  inventory: Boxes,
  quote: Calculator,
  reminder: BellRing,
  board: LayoutDashboard,
  report: ChartColumn,
  automate: Sparkle,
  optimize: SquareStack,
  grow: TrendingUp,
} satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof icons;
