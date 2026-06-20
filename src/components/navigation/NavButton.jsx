import React from "react";
import Link from "next/link";
import {
  Home,
  User,
  Palette,
  Phone,
  Github,
  Linkedin,
  Twitter,
  NotebookText,
} from "lucide-react";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "twitter":
      return <Twitter className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
      break;
    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div
      className="absolute z-50 cursor-pointer"
      style={{
        left: "50%",
        top: "50%",
        transform: `translate(-50%, -50%) translate(${x}, ${y})`,
      }}
    >
      <Link
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="pointer-events-auto group text-foreground rounded-full flex items-center justify-center
        bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]
        shadow-glass-inset hover:shadow-glass-sm transition-shadow duration-300"
        aria-label={label}
      >
        <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause group-hover:text-accent">
          {getIcon(icon)}
        </span>
      </Link>
    </div>
  );
};

export default NavButton;
