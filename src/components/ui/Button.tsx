"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ANIMATION } from "@/lib/constants";
import s from "./Button.module.scss";

type ButtonVariant = "primary" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  type?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = [
    s.base,
    s[variant],
    variant !== "link" ? s[size] : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const motionProps = {
    whileTap: { scale: 0.98 },
    transition: {
      duration: ANIMATION.duration.fast,
      ease: ANIMATION.ease,
    },
  };

  const outlineFill =
    variant === "outline" ? (
      <span className={s.outlineFill} />
    ) : null;

  if (href) {
    return (
      <motion.div {...motionProps} className={s.wrapper}>
        <Link
          href={href}
          className={`${classes}${variant === "outline" ? ` ${s.group}` : ""}`}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {outlineFill}
          <span className={s.content}>{children}</span>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      className={`${classes}${variant === "outline" ? ` ${s.group}` : ""}`}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
    >
      {outlineFill}
      <span className={s.content}>{children}</span>
    </motion.button>
  );
}
