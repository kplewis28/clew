import type { Locale } from "./config";
import { en } from "./en";
import { es, type Content } from "./es";

export type { Content };

export const dictionaries: Record<Locale, Content> = { es, en };
