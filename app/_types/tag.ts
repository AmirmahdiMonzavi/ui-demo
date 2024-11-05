export type TagPropsType = {
  title: string;
  disabled?: boolean;
  variant?: "primary" | "outlined" | "success" | "warning" | "secondary" | "danger";
  extraClassName?: string;
  size?: "sm" | "md";
  firstIcon?: JSX.Element;
  lastIcon?: JSX.Element;
};

export type GenerateTagStylesType = Partial<TagPropsType>;
