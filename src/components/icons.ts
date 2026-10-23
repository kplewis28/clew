import {
  BellRing,
  Boxes,
  Calculator,
  ChartColumn,
  Bot,
  ClipboardList,
  Globe,
  LayoutDashboard,
  Megaphone,
  Repeat,
  Shuffle,
  Sparkle,
  SquareStack,
  TrendingUp,
  TriangleAlert,
  Workflow,
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
  systems: Workflow,
  web: Globe,
  marketing: Megaphone,
  agents: Bot,
} satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof icons;
