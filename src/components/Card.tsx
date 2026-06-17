import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Base surface card: white background, hairline border, rounded corners, and a
 * subtle lift + soft shadow on hover.
 */
export default function Card({
  children,
  className = "",
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={`group rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${className}`}
    >
      {children}
    </Tag>
  );
}
