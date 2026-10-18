import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Car, MessageSquare, CheckCircle2, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { DEALERSHIP_INFO, VEHICLES } from '../data/dealershipData';

interface AppointmentSectionProps {
  initialVehicle?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ initialVehicle = '' }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredVehicle, setPreferredVehicle] = useState(initialVehicle || 'Any Executive Vehicle');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('11:00 AM');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const timeSlots = [
    '10:30 AM',
    '11:30 AM',
    '1:00 PM',
    '2:30 PM',
    '4:00 PM',
    '5:30 PM',
    '7:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!phoneNumber.trim() || phoneNumber.length < 7) {
      newErrors.phoneNumber = 'Please enter a valid mobile / WhatsApp number.';
    }
    if (!appointmentDate) {
      newErrors.appointmentDate = 'Please select a preferred viewing date.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Construct the WhatsApp message
    const formattedMessage = `*VIP SHOWROOM APPOINTMENT REQUEST*
*Dealership:* El-Khial Cars .fze (Dubai)

*Client Name:* ${fullName.trim()}
*Phone/WhatsApp:* ${phoneNumber.trim()}
*Preferred Vehicle:* ${preferredVehicle}
*Requested Date:* ${appointmentDate}
*Requested Time:* ${appointmentTime}
${message.trim() ? `*Special Request:* ${message.trim()}` : ''}

_Please confirm showroom availability for this viewing slot._`;

    const encodedUrl = `${DEALERSHIP_INFO.whatsappUrl}?text=${encodeURIComponent(formattedMessage)}`;

    // Set submitted state for in-page visual feedback
    setSubmitted(true);

    // Open WhatsApp link
    window.open(encodedUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setFullName('');
    setPhoneNumber('');
    setPreferredVehicle('Any Executive Vehicle');
    setAppointmentDate('');
    setMessage('');
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="appointment" className="py-20 sm:py-28 bg-[#0E1524] relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & High-Touch Experience */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[1px] bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                CONCIERGE SCHEDULING
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white leading-tight">
              Book Your Private Viewing
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Experience personalized attention in our Ras Al Khor showroom. We dedicate dedicated executive advisors and prepare your vehicle of interest for a private inspection.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                    Flexible Showroom Hours
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Monday to Saturday, 10:00 AM – 8:00 PM (Closed Sundays).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                    Showroom Confirmation Protocol
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Submitting this form dispatches your booking details directly to our WhatsApp concierge for immediate confirmation.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/25 text-xs text-amber-200">
              <p className="font-semibold mb-1">Direct Assistance Needed?</p>
              <p className="text-slate-300">
                You can also call us directly at{' '}
                <a href={`tel:${DEALERSHIP_INFO.phoneTel}`} className="text-amber-400 font-bold underline">
                  {DEALERSHIP_INFO.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#0B0F17]/90 border border-amber-400/30 shadow-2xl backdrop-blur-xl relative">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif-luxury text-white">
                    Request Generated
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your viewing details have been compiled and sent to WhatsApp. Our showroom representative will verify the vehicle availability and confirm your private slot.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 max-w-md mx-auto">
                    <span className="font-semibold text-amber-300">Note: </span>
                    If WhatsApp did not automatically open on your device, please click the button below.
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={DEALERSHIP_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 text-xs uppercase tracking-wider font-bold text-black bg-gradient-to-r from-[#FFF0BD] via-[#D4AF37] to-[#AA820A] rounded-lg shadow-lg"
                    >
                      Open WhatsApp Manually
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-3 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 rounded-lg"
                    >
                      Submit Another Booking
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-3 mb-4">
                    <h3 className="text-lg font-bold font-serif-luxury text-white">
                      VIP Viewing Reservation Form
                    </h3>
                    <p className="text-xs text-slate-400">
                      Please specify your contact details and preferred vehicle of interest.
                    </p>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-amber-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Sheikh Mohammed / John Smith"
                          className="w-full bg-slate-900/80 border border-slate-700/80 focus:border-amber-400 rounded-lg py-2.5 pl-9 pr-3 text-xs text-white placeholder-slate-500 outline-none transition-colors"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Mobile / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-amber-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="+971 50 000 0000"
                          className="w-full bg-slate-900/80 border border-slate-700/80 focus:border-amber-400 rounded-lg py-2.5 pl-9 pr-3 text-xs text-white placeholder-slate-500 outline-none transition-colors"
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.phoneNumber}</p>
                      )}
                    </div>
                  </div>

                  {/* Preferred Vehicle Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Preferred Vehicle of Interest
                    </label>
                    <div className="relative">
                      <Car className="w-4 h-4 text-amber-400 absolute left-3 top-3" />
                      <select
                        aria-label="Select preferred vehicle for private viewing"
                        value={preferredVehicle}
                        onChange={(e) => setPreferredVehicle(e.target.value)}
                        className="w-full bg-slate-900/80 border border-slate-700/80 focus:border-amber-400 rounded-lg py-2.5 pl-9 pr-3 text-xs text-white outline-none transition-colors"
                      >
                        <option value="Any Executive Vehicle">Any Executive / Showroom Consultation</option>
                        {VEHICLES.map((v) => (
                          <option key={v.id} value={`${v.make} ${v.model} (${v.year})`}>
                            {v.make} {v.model} ({v.year}) — AED {v.priceAED.toLocaleString()}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          required
                          value={appointmentDate}
                          onChange={(e) => setAppointmentDate(e.target.value)}
                          className="w-full bg-slate-900/80 border border-slate-700/80 focus:border-amber-400 rounded-lg py-2.5 px-3 text-xs text-white outline-none transition-colors"
                        />
                      </div>
                      {errors.appointmentDate && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.appointmentDate}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Preferred Time Slot
                      </label>
                      <select
                        aria-label="Select preferred viewing time slot"
                        value={appointmentTime}
                        onChange={(e) => setAppointmentTime(e.target.value)}
                        className="w-full bg-slate-900/80 border border-slate-700/80 focus:border-amber-400 rounded-lg py-2.5 px-3 text-xs text-white outline-none transition-colors"
                      >
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Specific Requirements or Trade-In Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Inquiring about international export to Saudi Arabia, or seeking a trade-in appraisal for my 2021 Porsche..."
                      className="w-full bg-slate-900/80 border border-slate-700/80 focus:border-amber-400 rounded-lg p-3 text-xs text-white placeholder-slate-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-[#FFF0BD] via-[#D4AF37] to-[#AA820A] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Proceed to WhatsApp Confirmation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center font-mono pt-1">
                    Direct connection to +971 54 366 9272. Confirmation issued upon showroom review.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
