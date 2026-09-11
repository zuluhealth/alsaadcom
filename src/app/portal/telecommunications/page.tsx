import { requirePartnerSession } from "@/lib/portal/session";
import PortalSection from "@/components/portal/PortalSection";
import SubsectionHeader from "@/components/portal/SubsectionHeader";
import PartnerProductCard from "@/components/portal/PartnerProductCard";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { getDomain } from "@/data/portal/domains";
import { getProductsForSubsection } from "@/data/portal/products";
import { getVendorById } from "@/data/portal/vendors";
import s from "./page.module.scss";

export const metadata = {
  title: "Telecommunications",
};

export default async function TelecommunicationsPage() {
  await requirePartnerSession();
  const domain = getDomain("telecommunications");
  if (!domain) return null;

  return (
    <div className={s.page}>
      <FadeIn>
        <PortalSection
          eyebrow="DOMAIN // 01"
          title={domain.title}
          description={domain.shortDescription}
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <nav className={s.toolbar} aria-label="Section navigation">
          <span className={s.tocLabel}>ON THIS PAGE</span>
          <ul className={s.tocList}>
            {domain.subsections.map((sub, index) => {
              const idx = String(index + 1).padStart(2, "0");
              return (
                <li key={sub.id}>
                  <a href={`#${sub.id}`} className={s.tocLink}>
                    <span className={s.tocIndex}>{idx}</span>
                    <span>{sub.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </FadeIn>

      <div className={s.subsections}>
        {domain.subsections.map((sub, index) => {
          const reference = `SECTION 01.${index + 1}`;
          const products = getProductsForSubsection(sub.id);

          if (sub.isAbstract) {
            return (
              <FadeIn key={sub.id} delay={0.05}>
                <section className={s.subsection}>
                  <SubsectionHeader
                    id={sub.id}
                    title={sub.title}
                    reference={reference}
                    abstract
                  />
                  <p className={s.subsectionLede}>{sub.description}</p>
                  <div className={s.abstractNotice}>
                    <span className={s.abstractTag}>
                      [ CLASSIFICATION SCOPE — VENDOR DETAILS RESTRICTED ]
                    </span>
                    <h4 className={s.abstractTitle}>
                      Program scope // vendor & product details available under NDA.
                    </h4>
                    <p className={s.abstractText}>{sub.approach}</p>
                    <div className={s.abstractCtaRow}>
                      <Button
                        variant="outline"
                        size="sm"
                        href="mailto:partners@alsaadtelecom.com?subject=Specialized%20Platforms%20Briefing%20Request"
                      >
                        Request Briefing
                      </Button>
                    </div>
                  </div>
                </section>
              </FadeIn>
            );
          }

          return (
            <FadeIn key={sub.id} delay={0.05}>
              <section className={s.subsection}>
                <SubsectionHeader
                  id={sub.id}
                  title={sub.title}
                  reference={reference}
                />
                <p className={s.subsectionLede}>{sub.description}</p>

                <div className={s.approachBlock}>
                  <span className={s.approachLabel}>INTEGRATION APPROACH</span>
                  <p className={s.approachText}>{sub.approach}</p>
                </div>

                {products.length > 0 ? (
                  <div className={s.partnersBlock}>
                    <span className={s.partnersLabel}>
                      AUTHORIZED PARTNERS & PRODUCTS · {products.length}
                    </span>
                    <div className={s.productGrid}>
                      {products.map((product) => {
                        const vendor = getVendorById(product.vendorId);
                        if (!vendor) return null;
                        return (
                          <PartnerProductCard
                            key={product.id}
                            product={product}
                            vendor={vendor}
                          />
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </section>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
