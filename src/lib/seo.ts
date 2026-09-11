import type { Metadata } from "next";
import {
  SITE_META_DESCRIPTION,
  SITE_NAME,
} from "@/lib/constants";

interface PageMetadataOptions {
  title: string;
  description?: string;
  path: string;
}

export function createPageMetadata({
  title,
  description = SITE_META_DESCRIPTION,
  path,
}: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: socialTitle,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: "/icon.svg",
          width: 512,
          height: 512,
          alt: `${SITE_NAME} logo`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
      images: ["/icon.svg"],
    },
  };
}
