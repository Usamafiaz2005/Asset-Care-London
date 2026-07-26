import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/constants';

export default function BookingScheduler() {
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    serviceCategory: 'Boiler Annual Service',
    selectedDate: '2026-07-28',
    selectedSlot: '08:00 - 12:00 (Morning Slot)',
    fullName: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 border border-obsidian-border space-y-6">
      <div className="flex items-center justify-between border-b border-obsidian-border pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal/20 border border-teal/40 flex items-center justify-center text-teal">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-paper font-mono">Book Engineer Slot</h3>
            <p className="text-xs text-paper-muted">Schedule your Basildon dispatch arrival window</p>
          </div>
        </div>

        <span className="text-xs font-mono font-bold text-teal bg-teal/10 px-3 py-1 rounded-full border border-teal/30">
          Step {bookingStep} of 3
        </span>
      </div>

      {confirmed ? (
        <div className="py-8 text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-teal/20 border border-teal flex items-center justify-center mx-auto text-teal">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="text-xl font-bold text-paper">Engineer Dispatch Booking Confirmed!</h4>
          <p className="text-xs text-paper-muted max-w-sm mx-auto">
            Thank you, <span className="text-paper font-bold">{bookingData.fullName}</span>. Your arrival slot for <span className="text-copper font-bold">{bookingData.selectedSlot}</span> on <span className="text-paper font-bold">{bookingData.selectedDate}</span> is locked in.
          </p>
          <div className="p-3 rounded-xl bg-obsidian-card border border-obsidian-border text-xs text-paper-subtle font-mono max-w-xs mx-auto">
            Dispatch Line: {COMPANY_DETAILS.phone}
          </div>
        </div>
      ) : (
        <div>
          {bookingStep === 1 && (
            <div className="space-y-4">
              <label htmlFor="booking-service-cat" className="block text-xs font-semibold text-paper-subtle">Select Required Service *</label>
              <select
                id="booking-service-cat"
                value={bookingData.serviceCategory}
                onChange={(e) => setBookingData({ ...bookingData, serviceCategory: e.target.value })}
                className="w-full bg-obsidian-dark border border-obsidian-border rounded-xl px-4 py-3 text-xs text-paper focus:border-copper focus:outline-none"
              >
                <option value="Boiler Annual Service">Boiler Annual Service & Healthcheck (£85)</option>
                <option value="Boiler Repair Diagnosis">Emergency Boiler Repair Diagnostic (£75)</option>
                <option value="CP12 Gas Safety Certificate">Landlord CP12 Safety Inspection (£70)</option>
                <option value="Air Conditioning Survey">Air Conditioning Site Survey (Free)</option>
                <option value="Heat Pump Consultation">Heat Pump £7.5k Grant Survey (Free)</option>
                <option value="Powerflushing Assessment">System Powerflushing Survey (£65)</option>
              </select>

              <div>
                <label htmlFor="booking-date" className="block text-xs font-semibold text-paper-subtle mb-2">Select Preferred Date *</label>
                <input
                  id="booking-date"
                  type="date"
                  value={bookingData.selectedDate}
                  onChange={(e) => setBookingData({ ...bookingData, selectedDate: e.target.value })}
                  className="w-full bg-obsidian-dark border border-obsidian-border rounded-xl px-4 py-3 text-xs text-paper focus:border-copper focus:outline-none"
                />
              </div>

              <div>
                <span className="block text-xs font-semibold text-paper-subtle mb-2">Arrival Time Window *</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    '08:00 - 12:00 (Morning Slot)',
                    '12:00 - 16:00 (Afternoon Slot)',
                    '16:00 - 19:00 (Evening Slot)'
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setBookingData({ ...bookingData, selectedSlot: slot })}
                      className={`p-3 rounded-xl text-xs font-mono font-semibold border text-left flex items-center justify-between ${bookingData.selectedSlot === slot ? 'bg-copper text-obsidian border-copper font-bold' : 'bg-obsidian-dark text-paper-subtle border-obsidian-border hover:border-copper'}`}
                    >
                      <span>{slot}</span>
                      <Clock className="w-3.5 h-3.5" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button type="button" onClick={() => setBookingStep(2)} className="btn-primary text-xs py-2.5 px-6">
                  Continue to Contact Details <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {bookingStep === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="booking-name" className="block text-xs font-semibold text-paper-subtle mb-1">Full Name *</label>
                <input
                  id="booking-name"
                  type="text"
                  required
                  placeholder="John Smith"
                  value={bookingData.fullName}
                  onChange={(e) => setBookingData({ ...bookingData, fullName: e.target.value })}
                  className="w-full bg-obsidian-dark border border-obsidian-border rounded-lg px-3 py-2.5 text-xs text-paper focus:border-copper focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="booking-phone" className="block text-xs font-semibold text-paper-subtle mb-1">Phone Number (For Arrival SMS) *</label>
                <input
                  id="booking-phone"
                  type="tel"
                  required
                  placeholder="07123 456789"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                  className="w-full bg-obsidian-dark border border-obsidian-border rounded-lg px-3 py-2.5 text-xs text-paper focus:border-copper focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="booking-address" className="block text-xs font-semibold text-paper-subtle mb-1">Property Address & Postcode *</label>
                <input
                  id="booking-address"
                  type="text"
                  required
                  placeholder="12 High Street, Basildon, SS14 1PR"
                  value={bookingData.address}
                  onChange={(e) => setBookingData({ ...bookingData, address: e.target.value })}
                  className="w-full bg-obsidian-dark border border-obsidian-border rounded-lg px-3 py-2.5 text-xs text-paper focus:border-copper focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="booking-notes" className="block text-xs font-semibold text-paper-subtle mb-1">Special Notes for Engineer</label>
                <textarea
                  id="booking-notes"
                  rows="2"
                  placeholder="Parking details, boiler model, access instructions..."
                  value={bookingData.notes}
                  onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                  className="w-full bg-obsidian-dark border border-obsidian-border rounded-lg px-3 py-2.5 text-xs text-paper focus:border-copper focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-3 flex justify-between items-center">
                <button type="button" onClick={() => setBookingStep(1)} className="btn-secondary text-xs py-2 px-4">
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
                <button type="submit" className="btn-primary text-xs py-3 px-6 font-bold">
                  Confirm Arrival Window <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
