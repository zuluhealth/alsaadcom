import { requirePartnerSession } from "@/lib/portal/session";
import { documents } from "@/data/portal/documents";
import DocumentsBrowser from "./DocumentsBrowser";

export default async function DocumentsPage() {
  await requirePartnerSession();
  return <DocumentsBrowser documents={documents} />;
}
