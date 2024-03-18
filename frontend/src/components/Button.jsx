import { cva } from "class-variance-authority";

// Base definition
const base = "inline-flex";



const button = cva(base, {
  variants: {
    intent: {
      primary: [
        "bg-button",
        "text-forground",
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
        "border-borderBtn",
        "border-solid",
        "border-2",
        "rounded-md",
        "font-bold",
        "mx-0",
      ],
    },
    size: {
      categories: ["text-sm"],
      small: ["text-sm", "py-0.5", "px-1"],
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