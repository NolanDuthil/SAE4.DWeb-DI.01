import { cva } from "class-variance-authority";

// Base definition
const base = "inline-flex";



const button = cva(base, {
  variants: {
    intent: {
      primary: [
        "bg-green-400",
        "text-forground",
        "hover:bg-green-300",
        "rounded-md",
        "font-bold",
      ],
      secondary: [
        "bg-transparent",
        "text-white",
        "border-white",
        "border-solid",
        "border-2",
        "hover:border-gray-300",
        "rounded-md",
        "font-bold",
      ],
      categories: [
        "bg-transparent",
        "text-white",
        "border-gray-300",
        "border-solid",
        "border-2",
        "rounded-md",
        "font-bold",
      ],
      MenuBar: [
        "bg-transparent",
      ]
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

function Button({ intent, size, className, ...rest }) {
  return <button {...rest} className={button({ intent, size, className })} />;
}

export default function AllButton() {
  return (
    <div className="grid bg-background h-screen place-content-center">
      <Button>Click me</Button>
      <Button intent="secondary">Click me</Button>
      <Button intent="categories" size="categories">Click me</Button>
      <Button intent="MenuBar">
        <MenuBar className=""></MenuBar>
      </Button>
    </div>
  );
}