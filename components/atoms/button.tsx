import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  px?: string;
  white?: boolean;
};

const Button = ({ className, href, onClick, children, px, white }: Props) => {
  const classes = cn(
    "button relative inline-flex items-center justify-center h-11 transition-all duration-300 px-7 font-orbitron text-xs font-bold uppercase tracking-widest rounded-lg",
    white ? "bg-n-1 text-n-8" : "bg-color-4 text-n-1 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]",
    className
  );

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className="relative z-10">{children}</span>
    </button>
  );

  const renderLink = () => (
    <Link href={href || "/"} className={classes}>
      <span className="relative z-10">{children}</span>
    </Link>
  );

  return href ? renderLink() : renderButton();
};

export default Button;