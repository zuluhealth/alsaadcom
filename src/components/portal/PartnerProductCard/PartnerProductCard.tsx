import { Download, ShieldCheck } from "lucide-react";
import Image from "next/image";
import type { PartnerProduct, PartnerVendor } from "@/lib/portal/types";
import s from "./PartnerProductCard.module.scss";

interface PartnerProductCardProps {
  product: PartnerProduct;
  vendor: PartnerVendor;
}

function vendorInitials(name: string): string {
  const stripped = name.replace(/&/g, "");
  const parts = stripped
    .split(/\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export default function PartnerProductCard({
  product,
  vendor,
}: PartnerProductCardProps) {
  return (
    <article className={s.card}>
      <header className={s.head}>
        <div className={s.vendor}>
          {vendor.logo ? (
            <Image
              src={vendor.logo}
              alt={vendor.name}
              width={150}
              height={26}
              className={s.vendorLogo}
            />
          ) : (
            <div className={s.logo} aria-hidden="true">
              <span className={s.logoGlyph}>
                {vendorInitials(vendor.name)}
              </span>
            </div>
          )}
          <div className={s.vendorMeta}>
            <span className={s.vendorLabel}>Vendor</span>
            <span className={s.vendorName}>{vendor.name}</span>
          </div>
        </div>
      </header>

      <div className={s.body}>
        <h3 className={s.product}>{product.productLine}</h3>
        <p className={s.description}>{product.description}</p>
      </div>

      {product.capabilityTags.length > 0 ? (
        <ul className={s.tags}>
          {product.capabilityTags.map((tag) => (
            <li key={tag} className={s.tag}>
              {tag}
            </li>
          ))}
        </ul>
      ) : null}

      <div className={s.authorization}>
        <ShieldCheck size={13} strokeWidth={1.75} />
        <span className={s.authLabel}>AUTHORIZED:</span>
        <span className={s.authScope}>{product.authorizationScope}</span>
      </div>

      <footer className={s.footer}>
        <a
          href={product.datasheetUrl}
          className={s.datasheet}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Download size={13} strokeWidth={1.6} />
          <span>Datasheet</span>
        </a>
      </footer>
    </article>
  );
}
