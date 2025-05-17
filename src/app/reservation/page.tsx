'use client';

import { useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay
} from 'date-fns';
import { fr } from 'date-fns/locale/fr';
import { format as formatDateFns } from 'date-fns';

const today = new Date();
const unavailableDates: string[] = [];
const availableHours: Record<string, string[]> = {};

// 1. Rien de dispo les 3 prochains jours
for (let i = 0; i < 3; i++) {
  const d = addDays(today, i);
  unavailableDates.push(formatDateFns(d, 'yyyy-MM-dd'));
}

// 2. Quelques dispos les 10 jours suivants (2 créneaux par jour)
const slots = ['12:00', '13:00', '19:00', '20:00'];
for (let i = 3; i < 13; i++) {
  const d = addDays(today, i);
  const key = formatDateFns(d, 'yyyy-MM-dd');
  // On choisit 2 créneaux aléatoires
  const shuffled = [...slots].sort(() => 0.5 - Math.random());
  availableHours[key] = shuffled.slice(0, 2);
}

// 3. De J+14 à J+3 mois : tout dispo sauf quelques créneaux bloqués
const start = addDays(today, 13);
const end = addMonths(today, 3);
for (let d = new Date(start); d <= end; d = addDays(d, 1)) {
  const key = formatDateFns(d, 'yyyy-MM-dd');
  // On bloque aléatoirement 0 ou 1 créneau par jour
  const shuffled = [...slots].sort(() => 0.5 - Math.random());
  const nbBlocked = Math.random() < 0.2 ? 1 : 0; // 20% de chance de bloquer un créneau
  availableHours[key] = nbBlocked ? shuffled.slice(0, 3) : slots;
}

function formatDate(date: Date) {
  return date.toISOString().split('T')[0];
}

export default function CustomCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', phone:'', couverts: '' });

  const renderHeader = () => {
    const isPrevDisabled =
      currentMonth.getFullYear() < new Date().getFullYear() ||
      (currentMonth.getFullYear() === new Date().getFullYear() && currentMonth.getMonth() <= new Date().getMonth());
    const maxDate = addMonths(new Date(), 3);
    const isNextDisabled =
      currentMonth.getFullYear() > maxDate.getFullYear() ||
      (currentMonth.getFullYear() === maxDate.getFullYear() && currentMonth.getMonth() >= maxDate.getMonth());
    return (
      <div className="flex justify-between items-center mb-4 w-full">
        <button
          onClick={() => !isPrevDisabled && setCurrentMonth(subMonths(currentMonth, 1))}
          disabled={isPrevDisabled}
          className={`px-3 py-1 rounded ${isPrevDisabled ? 'text-neutral-600 cursor-not-allowed' : 'hover:bg-amber-300 hover:text-black'}`}
        >
          &lt;
        </button>
        <h2 className="text-xl font-semibold text-amber-200">
          {format(currentMonth, 'MMMM yyyy', { locale: fr })}
        </h2>
        <button
          onClick={() => !isNextDisabled && setCurrentMonth(addMonths(currentMonth, 1))}
          disabled={isNextDisabled}
          className={`px-3 py-1 rounded ${isNextDisabled ? 'text-neutral-600 cursor-not-allowed' : 'hover:bg-amber-300 hover:text-black'}`}
        >
          &gt;
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const date = startOfWeek(currentMonth, { locale: fr });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center text-amber-300 font-medium">
          {format(addDays(date, i), 'EEE', { locale: fr })}
        </div>
      );
    }
    return <div className="grid grid-cols-7 w-full mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { locale: fr });
    const today = new Date();
    const maxDate = addMonths(today, 3);
    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= monthEnd) {
      for (let i = 0; i < 7; i++) {
        const currentDay = new Date(day);
        const formatted = formatDate(currentDay);
        const isDisabled =
          unavailableDates.includes(formatted) ||
          currentDay < new Date(formatDate(today)) ||
          currentDay > maxDate;
        const isToday = isSameDay(currentDay, today);
        const isSelected = selectedDate && isSameDay(currentDay, selectedDate);

        days.push(
          <div
            key={currentDay.toString()}
            className={`p-2 text-center rounded cursor-pointer border border-neutral-700 w-full ${
              !isSameMonth(currentDay, monthStart) ? 'text-neutral-600' : ''
            } ${isDisabled ? 'bg-neutral-700 text-neutral-500 cursor-not-allowed' : ''}
              ${isSelected ? 'bg-amber-300 text-black font-bold' : ''}
              ${isToday ? '!border-amber-200' : ''}
            `}
            onClick={() => {
              if (!isDisabled) {
                setSelectedDate(currentDay);
                setSelectedTime('');
              }
            }}
          >
            {format(currentDay, 'd')}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7 gap-2 w-full mb-2">
          {days}
        </div>
      );
      days = [];
    }

    return <div className="w-full">{rows}</div>;
  };

  const renderHours = () => {
    if (!selectedDate) return null;
    const key = formatDate(selectedDate);
    const slots = availableHours[key] || [];

    return (
      <div className="mt-6 w-full">
        <h3 className="text-lg font-semibold text-amber-200 mb-4">
          Horaires disponibles pour le {format(selectedDate, 'dd/MM/yyyy')}
        </h3>
        {slots.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {slots.map((hour) => (
              <button
                key={hour}
                className={`px-4 py-2 rounded-full border ${
                  selectedTime === hour
                    ? 'bg-amber-300 text-black'
                    : 'bg-neutral-800 border-neutral-600 text-amber-100 hover:bg-amber-400 hover:text-black'
                }`}
                onClick={() => setSelectedTime(hour)}
              >
                {hour}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-amber-100/70">Aucun horaire disponible.</p>
        )}
      </div>
    );
  };

  return (
    <section className="bg-neutral-900 text-amber-100 px-6 py-24 md:px-24 w-full">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col w-full rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl font-serif text-amber-200 mb-16 text-center">
            Réserver une table
          </h1>

          {renderHeader()}
          {renderDays()}
          {renderCells()}
          {renderHours()}

          {selectedDate && selectedTime && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  `Réservation confirmée :\nNom : ${form.nom} ${form.prenom}\nDate : ${format(
                    selectedDate,
                    'dd/MM/yyyy'
                  )} à ${selectedTime}\nCouverts : ${form.couverts}`
                );
              }}
              className="mt-10 space-y-6 mx-auto w-full max-w-md"
            >
            <div className='flex flex-row justify-between'>

              <div className="flex flex-col">
                <label className="text-sm text-amber-200 mb-1">Prénom</label>
                <input
                  type="text"
                  required
                  className="p-3 bg-neutral-800 border border-neutral-700 rounded text-amber-100"
                  value={form.prenom}
                  onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-amber-200 mb-1">Nom</label>
                <input
                  type="text"
                  required
                  className="p-3 bg-neutral-800 border border-neutral-700 rounded text-amber-100"
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                />
              </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-amber-200 mb-1">Numéro de téléphone</label>
                <input
                  type="text"
                  required
                  className="p-3 bg-neutral-800 border border-neutral-700 rounded text-amber-100"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-amber-200 mb-1">Email</label>
                <input
                  type="text"
                  required
                  className="p-3 bg-neutral-800 border border-neutral-700 rounded text-amber-100"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-amber-200 mb-1">Nombre de couverts</label>
                <input
                  type="number"
                  min={1}
                  max={8}
                  required
                  className="p-3 bg-neutral-800 border border-neutral-700 rounded text-amber-100"
                  value={form.couverts}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '' || (Number(value) >= 1 && Number(value) <= 8)) {
                      setForm({ ...form, couverts: value });
                    }
                  }}
                />
              </div>

              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-amber-300 text-neutral-900 px-6 py-3 rounded-full font-medium hover:bg-amber-400 transition"
                >
                  Confirmer la réservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
