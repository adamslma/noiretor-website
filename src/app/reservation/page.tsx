import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { createPageMetadata, createWebPageJsonLd } from "@/lib/seo";
import ReservationFlow from "./ReservationFlow";

const PAGE_TITLE = "Réservation";
const PAGE_DESCRIPTION = "Choisissez une date et envoyez une demande de réservation à Noir & Or.";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/reservation",
});

export default function ReservationPage() {
  return (
    <>
      <JsonLd
        id="reservation-page-structured-data"
        data={createWebPageJsonLd({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          path: "/reservation",
        })}
      />
      <ReservationFlow />
    </>
  );
}
