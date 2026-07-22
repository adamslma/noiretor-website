import type { Metadata } from "next";
import ReservationFlow from "./ReservationFlow";

export const metadata: Metadata = {
  title: "Réservation",
  description: "Choisissez une date et envoyez une demande de réservation à Noir & Or.",
};

export default function ReservationPage() {
  return <ReservationFlow />;
}
