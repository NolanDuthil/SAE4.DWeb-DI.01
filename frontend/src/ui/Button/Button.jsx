import { cva } from "class-variance-authority";

// Base definition
const base = "flex items-center justify-center ";



const button = cva(base, {
  variants: {
    intent: {
      primary: [
        "bg-button",
        "text-textButton",
        "hover:bg-button/90",
        "rounded-md",
        "font-bold",
      ],
      secondary: [
        "bg-transparent",
        "text-forground",
        "border-borderBtn",
        "border-solid",
        "border-2",
        "hover:border-hoverBorderBtn",
        "rounded-md",
        "font-bold",
      ],
      categories: [
        "bg-transparent",
        "text-forground",
        "border-borderBtn/80",
        "border-solid",
        "border-2",
        "rounded-md",
        "font-bold",
        "mx-0",
        "p-1"
      ],
    },
    size: {
      categories: ["text-sm"],
      small: ["text-sm", "p-2"],
      medium: ["text-base", "py-3", "px-6"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
    class: "uppercase",
  },
});

export default function Button({ intent, size, className, ...rest }) {
  return <button {...rest} className={button({ intent, size, className })} />;
}