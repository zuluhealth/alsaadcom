import { requirePartnerSession } from "@/lib/portal/session";
import { programs } from "@/data/portal/programs";
import ExperienceBrowser from "./ExperienceBrowser";

export default async function ExperiencePage() {
  await requirePartnerSession();
  return <ExperienceBrowser programs={programs} />;
}
