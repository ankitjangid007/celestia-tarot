import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Narrow reading width, used for legal pages and long-form text. */
  narrow?: boolean;
}

export function Container({ children, as: Tag = "div", className, narrow = false }: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        narrow ? "max-w-3xl" : "max-w-7xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
