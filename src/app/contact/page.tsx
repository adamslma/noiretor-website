import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l’équipe de Noir & Or pour une demande particulière.",
};

export default function ContactPage() {
  return <ContactForm />;
}
