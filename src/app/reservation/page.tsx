"use client";

import { type FormEvent, useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isBefore,
  isSameDay,
  isSameMonth,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { fr } from "date-fns/locale/fr";

const allSlots = ["12:00", "12:30", "13:00", "13:30", "19:00", "19:30", "20:00", "20:30"];

function slotsFor(date: Date, today: Date) {
  if (isBefore(date, startOfDay(today)) || date.getDay() === 0 || date.getDay() === 1) return [];
  const offset = date.getDate() % 4;
  return allSlots.filter((_, index) => (index + offset) % 4 !== 0);
}

type GuestForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  guests: string;
  note: string;
};
const emptyForm: GuestForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  guests: "2",
  note: "",
};

export default function ReservationPage() {
  const [today] = useState(() => startOfDay(new Date()));
  const [currentMonth, setCurrentMonth] = useState(() => startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState<GuestForm>(emptyForm);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const monthStart = startOfMonth(currentMonth);
  const calendarDays = eachDayOfInterval({
    start: startOfWeek(monthStart, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(monthStart), { weekStartsOn: 1 }),
  });
  const maxDate = addMonths(today, 3);
  const visibleSlots = selectedDate ? slotsFor(selectedDate, today) : [];

  const update = (field: keyof GuestForm, value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!selectedDate || !selectedTime) return setError("Choisissez une date et un horaire.");
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError("Saisissez une adresse email valide.");
    if (!/^[+\d][\d\s.-]{7,}$/.test(form.phone))
      return setError("Saisissez un numéro de téléphone valide.");
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
    setConfirmed(true);
  }

  if (confirmed && selectedDate) {
    return (
      <main
        id="contenu"
        className="flex min-h-[100dvh] items-center bg-[#eee9df] px-4 pb-20 pt-32 md:px-10"
      >
        <section className="mx-auto w-full max-w-4xl border border-[#191815]/20 p-7 md:p-14">
          <p className="eyebrow text-[#a7793d]">Demande enregistrée</p>
          <h1 className="mt-6 max-w-2xl text-5xl leading-[1.05] md:text-7xl">
            Votre table vous attend.
          </h1>
          <div className="mt-12 grid gap-8 border-y border-[#191815]/20 py-8 text-sm md:grid-cols-3">
            <div>
              <p className="eyebrow mb-2 text-[#736d63]">Quand</p>
              <p>
                {format(selectedDate, "EEEE d MMMM", { locale: fr })}
                <br />à {selectedTime}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-2 text-[#736d63]">Pour</p>
              <p>
                {form.firstName} {form.lastName}
                <br />
                {form.guests} {Number(form.guests) > 1 ? "personnes" : "personne"}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-2 text-[#736d63]">Simulation</p>
              <p className="break-all">
                Adresse saisie
                <br />
                {form.email}
              </p>
            </div>
          </div>
          <p className="mt-7 max-w-xl text-sm leading-7 text-[#5e594f]">
            Cette démonstration simule l’enregistrement de la demande. L’équipe vous contactera si
            une précision est nécessaire.
          </p>
          <button
            type="button"
            className="button-primary mt-8"
            onClick={() => {
              setConfirmed(false);
              setSelectedDate(null);
              setSelectedTime("");
              setForm(emptyForm);
            }}
          >
            Faire une autre demande
          </button>
        </section>
      </main>
    );
  }

  return (
    <main id="contenu" className="bg-[#191815] pb-24 pt-[4.75rem] text-[#eee9df] md:pb-32">
      <header className="site-container pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow mb-6 text-[#d0ad74]">Réservation</p>
            <h1 className="text-[clamp(4rem,10vw,8.5rem)] leading-[0.85] tracking-[-0.065em]">
              Votre table.
            </h1>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#eee9df]/60 md:col-span-4">
            Choisissez un créneau jusqu’à trois mois à l’avance. Pour plus de huit personnes,
            appelez-nous au 01 42 00 00 00.
          </p>
        </div>
      </header>

      <form
        onSubmit={submit}
        className="site-container grid overflow-hidden border border-white/15 lg:grid-cols-[1.05fr_.95fr]"
      >
        <section
          className="border-b border-white/15 p-5 sm:p-8 md:p-12 lg:border-b-0 lg:border-r"
          aria-labelledby="date-heading"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="eyebrow text-[#d0ad74]">Étape 1</p>
              <h2 id="date-heading" className="mt-2 text-3xl">
                Date et heure
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Mois précédent"
                disabled={isSameMonth(currentMonth, today)}
                onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                className="h-10 w-10 border border-white/20 text-xl disabled:cursor-not-allowed disabled:opacity-25 hover:border-[#d0ad74]"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Mois suivant"
                disabled={!isBefore(addMonths(currentMonth, 1), maxDate)}
                onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                className="h-10 w-10 border border-white/20 text-xl disabled:cursor-not-allowed disabled:opacity-25 hover:border-[#d0ad74]"
              >
                ›
              </button>
            </div>
          </div>
          <p className="mt-10 font-serif text-2xl capitalize">
            {format(currentMonth, "MMMM yyyy", { locale: fr })}
          </p>
          <div className="mt-6 grid grid-cols-7 gap-1 text-center">
            {["lun", "mar", "mer", "jeu", "ven", "sam", "dim"].map((day) => (
              <span key={day} className="eyebrow py-2 text-[#eee9df]/35">
                {day}
              </span>
            ))}
            {calendarDays.map((day) => {
              const slots = slotsFor(day, today);
              const isOutsideMonth = !isSameMonth(day, monthStart);
              const isPast = isBefore(day, today);
              const isClosed = day.getDay() === 0 || day.getDay() === 1;
              const isAfterBookingWindow = isBefore(maxDate, day);
              const disabled =
                isOutsideMonth || isPast || isClosed || isAfterBookingWindow || slots.length === 0;
              const selected = !!selectedDate && isSameDay(day, selectedDate);
              return (
                <button
                  key={day.toISOString()}
                  type="button"
                  disabled={disabled}
                  aria-pressed={selected}
                  onClick={() => {
                    setSelectedDate(day);
                    setSelectedTime("");
                  }}
                  className={`aspect-square min-w-0 border text-xs tabular-nums sm:text-sm ${selected ? "border-[#d0ad74] bg-[#d0ad74] text-[#191815]" : "border-white/10 hover:border-[#d0ad74]"} ${disabled ? "cursor-not-allowed border-white/[0.04] bg-white/[0.06] text-white/25 hover:border-white/[0.04]" : ""} ${isOutsideMonth ? "opacity-30" : ""}`}
                >
                  {format(day, "d")}
                </button>
              );
            })}
          </div>

          <div className="mt-10 min-h-28 border-t border-white/15 pt-7" aria-live="polite">
            {selectedDate ? (
              <>
                <p className="mb-4 text-sm capitalize text-[#eee9df]/65">
                  {format(selectedDate, "EEEE d MMMM", { locale: fr })}
                </p>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {visibleSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      aria-pressed={selectedTime === time}
                      onClick={() => setSelectedTime(time)}
                      className={`border px-3 py-2.5 font-mono text-xs tabular-nums ${selectedTime === time ? "border-[#d0ad74] bg-[#d0ad74] text-[#191815]" : "border-white/20 hover:border-[#d0ad74]"}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-sm text-[#eee9df]/45">
                Sélectionnez une date disponible pour voir les horaires.
              </p>
            )}
          </div>
        </section>

        <section className="bg-[#26231e] p-5 sm:p-8 md:p-12" aria-labelledby="details-heading">
          <p className="eyebrow text-[#d0ad74]">Étape 2</p>
          <h2 id="details-heading" className="mt-2 text-3xl">
            Vos coordonnées
          </h2>
          <div className="mt-10 grid gap-x-6 gap-y-5 sm:grid-cols-2">
            <label className="text-xs text-[#eee9df]/65">
              Prénom *
              <input
                required
                autoComplete="given-name"
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
              />
            </label>
            <label className="text-xs text-[#eee9df]/65">
              Nom *
              <input
                required
                autoComplete="family-name"
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
              />
            </label>
            <label className="text-xs text-[#eee9df]/65 sm:col-span-2">
              Email *
              <input
                required
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </label>
            <label className="text-xs text-[#eee9df]/65">
              Téléphone *
              <input
                required
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </label>
            <label className="text-xs text-[#eee9df]/65">
              Nombre de personnes *
              <select
                required
                value={form.guests}
                onChange={(e) => update("guests", e.target.value)}
              >
                {Array.from({ length: 8 }, (_, i) => i + 1).map((count) => (
                  <option key={count} value={count}>
                    {count} {count > 1 ? "personnes" : "personne"}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-xs text-[#eee9df]/65 sm:col-span-2">
              Allergie, occasion ou précision
              <textarea
                rows={3}
                value={form.note}
                onChange={(e) => update("note", e.target.value)}
              />
            </label>
          </div>
          <label className="mt-7 flex items-start gap-3 text-xs leading-5 text-[#eee9df]/55">
            <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#a7793d]" />
            J’accepte que mes coordonnées soient utilisées pour traiter cette demande de
            réservation.
          </label>
          {error && (
            <p
              role="alert"
              className="mt-5 border-l-2 border-[#d0ad74] pl-4 text-sm text-[#d0ad74]"
            >
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !selectedDate || !selectedTime}
            className="button-light mt-8 w-full disabled:cursor-not-allowed disabled:opacity-35"
          >
            {loading ? (
              <>
                <span className="h-4 w-44 animate-pulse bg-[#191815]/25" aria-hidden="true" />
                <span className="sr-only">Enregistrement en cours</span>
              </>
            ) : (
              "Confirmer la demande"
            )}
          </button>
          <p className="mt-4 text-center text-[0.68rem] leading-5 text-[#eee9df]/38">
            Aucun débit en ligne. Une empreinte bancaire peut être demandée pour certains services.
          </p>
        </section>
      </form>
    </main>
  );
}
