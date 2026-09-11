import type { NextConfig } from "next";
import path from "path";
import { securityHeaders } from "./src/lib/security-headers";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders() }];
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  outputFileTracingRoot: path.resolve(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/webp"],
    qualities: [65, 75],
    // Partner marks are static SVGs we ship in /public. next/image refuses to
    // serve any SVG without this flag — it 400s and the logo renders broken,
    // which is what the portal partner grid has been doing. The files are our
    // own, and the headers below serve them sandboxed with scripting off.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  transpilePackages: ["three"],
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "@react-three/drei"],
  },
};

export default nextConfig;
