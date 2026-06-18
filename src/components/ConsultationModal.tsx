import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, CheckCircle2, AlertCircle, FileText, User, Mail, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { ConsultationBooking } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export default function ConsultationModal({ isOpen, onClose, prefilledService = '' }: ConsultationModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [entityType, setEntityType] = useState('Pvt Ltd Company');
  const [service, setService] = useState(prefilledService || 'Income Tax Return (ITR) Filing');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00 AM');
  const [notes, setNotes] = useState('');
  
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [createdBooking, setCreatedBooking] = useState<ConsultationBooking | null>(null);

  // Initialize selected service if prop changes
  React.useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) return setError('Please enter your full name');
    if (!email.trim() || !email.includes('@')) return setError('Please enter a valid corporate email address');
    if (!phone.trim() || phone.length < 10) return setError('Please enter a valid 10-digit Indian phone number');
    if (!date) return setError('Please select a preferred date for the appointment');

    const newBooking: ConsultationBooking = {
      id: 'GVC-' + Math.floor(100000 + Math.random() * 900000),
      clientName: name,
      email,
      phone,
      entityType,
      serviceRequested: service,
      preferredDate: date,
      preferredTime: time,
      notes,
      bookedAt: new Date().toLocaleString()
    };

    // Save to localStorage
    try {
      const existing = localStorage.getItem('gvc_bookings');
      const bookingsArray = existing ? JSON.parse(existing) : [];
      bookingsArray.unshift(newBooking);
      localStorage.setItem('gvc_bookings', JSON.stringify(bookingsArray));
      
      // Dispatch storage event to update lists in other parts’ state
      window.dispatchEvent(new Event('storage_updated'));
    } catch (e) {
      console.error('Local storage backup failed:', e);
    }

    setCreatedBooking(newBooking);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setNotes('');
    setIsSuccess(false);
    setCreatedBooking(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden my-8"
        >
          {/* Header */}
          <div className="bg-primary text-white p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <span className="text-xs uppercase tracking-widest font-extrabold text-accent">
                ICAI Partners Desk
              </span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight">
              Book a Free Expert Consultation
            </h3>
            <p className="text-sm text-gray-300 mt-1">
              Connect with senior tax consultants in Gurgaon to review notices, audit logs, or map saving opportunities.
            </p>
          </div>

          <div className="p-6">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg text-sm font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-primary" /> Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm text-gray-800"
                      required
                    />
                  </div>

                  {/* Corporate Email */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-primary" /> Corporate Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. r.sharma@enterprise.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm text-gray-800"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-primary" /> Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-sm text-gray-400 font-bold">+91</span>
                      <input
                        type="tel"
                        placeholder="98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="w-full pl-12 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm text-gray-800"
                        required
                      />
                    </div>
                  </div>

                  {/* Entity Type */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-primary" /> Entity Classification
                    </label>
                    <select
                      value={entityType}
                      onChange={(e) => setEntityType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm text-gray-800 bg-white"
                    >
                      <option value="Proprietorship">Proprietorship</option>
                      <option value="Partnership / LLP">Partnership / LLP</option>
                      <option value="Pvt Ltd Company">Pvt Ltd Company</option>
                      <option value="Startups (80-IAC Eligible)">Startup (80-IAC Eligible)</option>
                      <option value="Individual/Professional">Individual Freelancer</option>
                    </select>
                  </div>
                </div>

                {/* Service Requested */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    Tax Advisory Service Focus
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm text-gray-800 bg-white"
                  >
                    <option value="Income Tax Return (ITR) Filing">Income Tax Return (ITR) Filing</option>
                    <option value="Strategic Tax Planning">Strategic Tax Planning</option>
                    <option value="Notice & Assessment Representation">Notice & Assessment Support</option>
                    <option value="TDS & Compliance Management">TDS Compliance Management</option>
                    <option value="Direct Tax Advisory">Direct Tax Advisory</option>
                    <option value="Statutory Audit Coordination">Statutory Audit Integration & Linking</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" /> Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm text-gray-800"
                      required
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-primary" /> Best Meeting Window
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm text-gray-800 bg-white"
                    >
                      <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM (Morning Session)</option>
                      <option value="11:30 AM - 01:00 PM">11:30 AM - 01:00 PM</option>
                      <option value="02:30 PM - 04:00 PM">02:30 PM - 04:00 PM (Midday Session)</option>
                      <option value="04:00 PM - 05:30 PM">04:00 PM - 05:30 PM</option>
                    </select>
                  </div>
                </div>

                {/* Message Notes */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Specific context or Scrutiny notice details (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Provide any context (e.g. 'Received discrepancy notice on AIS mismatch' or 'Want statutory audit linking strategy')"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm text-gray-800 resize-none"
                  ></textarea>
                </div>

                <div className="flex gap-3 justify-end pt-2 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-primary text-white font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-primary-light transition-all flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    Confirm Appointment
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6 py-6 text-center">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner border border-green-100">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary">Pre-Audit Consultation Booked!</h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto mt-1">
                    Your partner review briefing is locked. A Senior Tax Consultant will reach out within 2 hours to walk through your documentation.
                  </p>
                </div>

                {/* Consultation Passport Ticket */}
                <div className="max-w-md mx-auto bg-gray-50 border border-gray-200 rounded-xl p-5 text-left font-mono text-xs text-gray-700 relative overflow-hidden shadow-inner">
                  <div className="absolute top-0 right-0 bg-accent text-primary px-3 py-1 font-sans font-extrabold rounded-bl-lg text-[10px] tracking-widest uppercase">
                    CONFIRMED
                  </div>
                  <div className="border-b border-dashed border-gray-300 pb-3 mb-3">
                    <span className="font-extrabold text-primary text-sm font-sans block mb-1">GVC AUDIT PARTNER SERVICES</span>
                    <span className="text-gray-400">PASSPORT NO: {createdBooking?.id}</span>
                  </div>
                  <div className="space-y-1.5 font-sans">
                    <div><strong className="font-bold text-gray-900 border-b border-gray-200 pb-0.5">Client:</strong> {createdBooking?.clientName}</div>
                    <div><strong className="font-bold text-gray-900">Entity Structure:</strong> {createdBooking?.entityType}</div>
                    <div><strong className="font-bold text-gray-900">Tax Focus:</strong> {createdBooking?.serviceRequested}</div>
                    <div><strong className="font-bold text-gray-900">Scheduled Date:</strong> {createdBooking?.preferredDate}</div>
                    <div><strong className="font-bold text-gray-900">Standard Slot:</strong> {createdBooking?.preferredTime}</div>
                    {createdBooking?.notes && (
                      <div className="mt-2 bg-white p-2 rounded border border-gray-100 text-[11px] text-gray-500 italic">
                        "{createdBooking.notes}"
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 flex justify-center">
                  <button
                    onClick={handleReset}
                    className="bg-primary hover:bg-primary-light text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-all shadow cursor-pointer"
                  >
                    Great, Thank You
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
