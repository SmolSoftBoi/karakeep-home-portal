import { HTMLAttributes } from "react";

/**
 * Display a page heading with an optional emoji.
 */
export interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Heading text. */
  title: string;
}

export default function Header({ title, ...rest }: HeaderProps) {
  return (
    <h1 className="text-2xl font-bold" {...rest}>
      {title} 🎉
    </h1>
  );
}
