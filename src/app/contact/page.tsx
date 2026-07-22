import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { createPageMetadata, createWebPageJsonLd } from "@/lib/seo";
import ContactForm from "./ContactForm";

const PAGE_TITLE = "Contact";
const PAGE_DESCRIPTION = "Contactez l’équipe de Noir & Or pour une demande particulière.";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        id="contact-page-structured-data"
        data={createWebPageJsonLd({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          path: "/contact",
        })}
      />
      <ContactForm />
    </>
  );
}
