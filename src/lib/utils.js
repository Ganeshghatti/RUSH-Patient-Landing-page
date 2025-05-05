import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Smooth scroll function to navigate to sections
export function scrollToSection(sectionId, event) {
  if (event) {
    event.preventDefault();
  }

  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Offset for the fixed header
      behavior: "smooth",
    });
  }
}
