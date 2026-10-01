import type { LucideIcon } from "lucide-react";
import {
  Award,
  Cable,
  ClipboardCheck,
  Gauge,
  HardHat,
  Lightbulb,
  Power,
  ShieldCheck,
  Sun,
  Wind,
  Zap,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  sun: Sun,
  "clipboard-check": ClipboardCheck,
  cable: Cable,
  power: Power,
  wind: Wind,
  "hard-hat": HardHat,
  award: Award,
  shield: ShieldCheck,
  gauge: Gauge,
  lightbulb: Lightbulb,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Zap;
  return <Icon className={className} aria-hidden />;
}
