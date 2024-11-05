export const BADGE_CARD_CONFIG = {
  primary: {
    background: "bg-primary-02 border-primary-03",
    border_active: "border-primary-06",
    text_active: "text-primary-06",
    color: "text-primary-06",
  },
  leaf: {
    background: "bg-leaf-02 border-leaf-03",
    border_active: "border-leaf-06",
    text_active: "text-leaf-06",
    color: "text-leaf-06",
  },
  sun: {
    background: "bg-sun-02 border-sun-03",
    border_active: "border-sun-06",
    text_active: "text-sun-06",
    color: "text-sun-06",
  },
  ir: {
    background: "bg-ir-02 border-ir-03",
    border_active: "border-ir-06",
    text_active: "text-ir-06",
    color: "text-ir-06",
  },
  storm: {
    background: "bg-storm-02 border-storm-03",
    border_active: "border-storm-06",
    text_active: "text-storm-06",
    color: "text-storm-06",
  },
} as const;

export type ColorCardFilterColorType = keyof typeof BADGE_CARD_CONFIG;
