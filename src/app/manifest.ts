import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Al Saad Telecom",
    short_name: "AST",
    description:
      "Mission-critical telecommunications, secured communications, and security infrastructure.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icons/ast-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/ast-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
