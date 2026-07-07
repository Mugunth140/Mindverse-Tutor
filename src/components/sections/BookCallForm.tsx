"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { supabase } from "@/lib/supabase";
import { generateAvailableSlotsUTC, groupSlotsByTimezone } from "@/lib/scheduler";
import { Button } from "@/components/ui/Button";
import { sendBookingEmail } from "@/app/actions/sendBookingEmail";

// Common timezones for the dropdown
const TIMEZONES = [
  // India
  "Asia/Kolkata",
  
  // UAE
  "Asia/Dubai",
  
  // Singapore
  "Asia/Singapore",
  
  // USA
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Phoenix",
  "America/Los_Angeles",
  "America/Anchorage",
  "Pacific/Honolulu",
  
  // Canada
  "America/St_Johns",
  "America/Halifax",
  "America/Toronto",
  "America/Winnipeg",
  "America/Edmonton",
  "America/Vancouver",
  
  // Australia
  "Australia/Sydney",
  "Australia/Brisbane",
  "Australia/Adelaide",
  "Australia/Darwin",
  "Australia/Perth",

  // Europe & Oceania
  "Europe/London",
  "Pacific/Auckland"
];

export function BookCallForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [userTimezone, setUserTimezone] = useState<string>("Asia/Kolkata");
  
  // Date and Time State
  const [groupedSlots, setGroupedSlots] = useState<Record<string, Date[]>>({});
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [selectedDateStr, setSelectedDateStr] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]); // UTC ISO strings
  
  // Form Data State
  const [formData, setFormData] = useState({
    parent_name: "", parent_email: "", parent_phone: "",
    city: "", country: "",
    child_name: "", child_grade: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize timezone and slots on client mount
  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) setUserTimezone(tz);
    } catch (e) {}
    
    fetchBookedSlots();
  }, []);

  // Recalculate slots whenever timezone changes
  useEffect(() => {
    const rawSlots = generateAvailableSlotsUTC();
    const grouped = groupSlotsByTimezone(rawSlots, userTimezone);
    setGroupedSlots(grouped);
    
    const dates = Object.keys(grouped).sort();
    setAvailableDates(dates);
    
    if (!dates.includes(selectedDateStr || "")) {
      setSelectedDateStr(dates[0] || null);
    }
  }, [userTimezone]);

  const fetchBookedSlots = async () => {
    try {
      const { data, error } = await supabase.rpc('get_booked_slots');
      if (error) {
        console.error("Error fetching booked slots:", error);
        return;
      }
      if (data) {
        setBookedSlots(data.map((d: any) => new Date(d.call_datetime_utc).toISOString()));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) return;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const { error } = await supabase.from('clarity_calls').insert({
        ...formData,
        call_datetime_utc: selectedSlot.toISOString()
      });
      
      if (error) throw error;

      // Send email via Brevo Server Action
      await sendBookingEmail({
        ...formData,
        call_datetime_utc: selectedSlot.toISOString(),
        timezone: userTimezone
      });
      
      setIsSuccess(true);
      setStep(3);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSlotBooked = (slot: Date) => bookedSlots.includes(slot.toISOString());

  if (isSuccess && step === 3) {
    return (
      <div className="bg-white rounded-[3rem] p-12 md:p-24 shadow-card border border-muted/5 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-text-dark mb-6">Call Confirmed!</h2>
        <p className="text-lg text-muted mb-10">
          Thank you, {formData.parent_name}! Your clarity call is scheduled for <br/>
          <strong className="text-text-dark">{selectedSlot && formatInTimeZone(selectedSlot, userTimezone, 'MMMM d, yyyy - h:mm a')}</strong> ({userTimezone}).
        </p>
        <p className="text-muted mb-12">We've sent a confirmation mail to {formData.parent_email}.</p>
        <Button href="/" size="lg" className="bg-primary text-white">Return to Home</Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-muted/5 overflow-hidden max-w-6xl mx-auto flex flex-col lg:flex-row min-h-[700px]">
      
      {/* LEFT PANEL: Form Details */}
      <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-muted/10 bg-background-alt/30">
        <div className="flex items-center gap-4 mb-10">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step === 1 ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>1</div>
          <div className="h-px bg-muted/20 flex-1"></div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step === 2 ? 'bg-primary text-white' : 'bg-muted/10 text-muted'}`}>2</div>
        </div>

        {step === 1 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl md:text-3xl font-black text-text-dark mb-2">Your Details</h2>
            <p className="text-muted text-sm mb-8">Let us know a bit about you and your child so we can prepare for our chat.</p>
            
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-text-dark uppercase tracking-wide mb-2">Parent Name</label>
                  <input required name="parent_name" value={formData.parent_name} onChange={handleInputChange} className="w-full bg-white border border-muted/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-dark uppercase tracking-wide mb-2">Parent Email</label>
                  <input required type="email" name="parent_email" value={formData.parent_email} onChange={handleInputChange} className="w-full bg-white border border-muted/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="jane@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-text-dark uppercase tracking-wide mb-2">Phone Number</label>
                <input required name="parent_phone" value={formData.parent_phone} onChange={handleInputChange} className="w-full bg-white border border-muted/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="+1 (555) 000-0000" />
              </div>

              <div className="p-5 bg-white rounded-2xl border border-muted/10 space-y-4 shadow-sm">
                <h3 className="font-bold text-sm text-text-dark">Location</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input required name="city" value={formData.city} onChange={handleInputChange} className="w-full bg-background-alt border border-muted/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="City" />
                  <input required name="country" value={formData.country} onChange={handleInputChange} className="w-full bg-background-alt border border-muted/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Country" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <div>
                  <label className="block text-xs font-bold text-text-dark uppercase tracking-wide mb-2">Child's Name</label>
                  <input required name="child_name" value={formData.child_name} onChange={handleInputChange} className="w-full bg-white border border-muted/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-dark uppercase tracking-wide mb-2">Child's Grade</label>
                  <input required name="child_grade" value={formData.child_grade} onChange={handleInputChange} className="w-full bg-white border border-muted/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="e.g. 5th Grade" />
                </div>
              </div>
              
              <div className="pt-6 flex justify-center">
                <Button 
                  onClick={() => {
                    if(formData.parent_name && formData.parent_email && formData.child_name && formData.city && formData.country) setStep(2);
                    else alert("Please fill in all required fields to continue.");
                  }} 
                  size="md" className="w-sm bg-primary text-white"
                >
                  Continue to Schedule
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 h-full flex flex-col justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🗓️</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-text-dark mb-4">You're almost there!</h2>
              <p className="text-muted leading-relaxed mb-8">Please select a date and time from the calendar on the right to finalize your booking.</p>
              
              <div className="bg-white p-6 rounded-2xl border border-muted/10 shadow-sm text-left mb-8">
                <h4 className="text-xs font-bold text-muted uppercase tracking-widest mb-3">Booking Summary</h4>
                <p className="font-bold text-text-dark">{formData.parent_name}</p>
                <p className="text-sm text-muted">{formData.parent_email}</p>
                <p className="text-sm text-muted mt-2">Child: {formData.child_name} ({formData.child_grade})</p>
              </div>

              <Button onClick={() => setStep(1)} variant="outline" size="md" className="border-muted/20">
                Back to Edit Details
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT PANEL: Scheduler */}
      <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 bg-white relative">
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <h2 className="text-2xl font-black text-text-dark">Select a Time</h2>
          
          <div className="relative">
            <select 
              value={userTimezone} 
              onChange={(e) => setUserTimezone(e.target.value)}
              className="appearance-none bg-background-alt border border-muted/10 rounded-xl pl-4 pr-10 py-2.5 text-sm font-medium text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {TIMEZONES.includes(userTimezone) ? null : <option value={userTimezone}>{userTimezone}</option>}
              {TIMEZONES.map(tz => (
                <option key={tz} value={tz}>{tz.replace('_', ' ')}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
              ▼
            </div>
          </div>
        </div>

        {/* Date Selection */}
        <div className="mb-8">
          <h3 className="text-xs font-bold text-muted uppercase tracking-widest mb-4">Available Dates</h3>
          <div className="flex overflow-x-auto pb-4 gap-3 snap-x scrollbar-hide hide-scrollbar">
            {availableDates.map(dateStr => {
              const dateObj = new Date(dateStr);
              const isSelected = selectedDateStr === dateStr;
              return (
                <button
                  key={dateStr}
                  onClick={() => setSelectedDateStr(dateStr)}
                  className={`snap-start shrink-0 flex flex-col items-center justify-center w-20 h-24 rounded-2xl border-2 transition-all ${
                    isSelected 
                      ? 'border-primary bg-primary/5 shadow-sm' 
                      : 'border-muted/10 hover:border-primary/30 hover:bg-background-alt'
                  }`}
                >
                  <span className={`text-xs font-bold uppercase mb-1 ${isSelected ? 'text-primary' : 'text-muted'}`}>
                    {format(dateObj, 'EEE')}
                  </span>
                  <span className={`text-2xl font-black ${isSelected ? 'text-primary' : 'text-text-dark'}`}>
                    {format(dateObj, 'd')}
                  </span>
                  <span className={`text-[10px] font-bold ${isSelected ? 'text-primary' : 'text-muted'}`}>
                    {format(dateObj, 'MMM')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Selection */}
        <div className="mb-10">
          <h3 className="text-xs font-bold text-muted uppercase tracking-widest mb-4">Available Times ({userTimezone.split('/')[1]?.replace('_', ' ')})</h3>
          
          {selectedDateStr && groupedSlots[selectedDateStr] ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {groupedSlots[selectedDateStr].map((slot, i) => {
                const isSelected = selectedSlot?.getTime() === slot.getTime();
                const booked = isSlotBooked(slot);
                
                return (
                  <button
                    key={i}
                    disabled={booked}
                    onClick={() => {
                      setSelectedSlot(slot);
                      if(step === 1) setStep(2);
                    }}
                    className={`py-3 rounded-xl border-2 font-bold text-sm transition-all flex items-center justify-center ${
                      booked 
                        ? 'border-muted/5 bg-muted/5 text-muted/40 cursor-not-allowed'
                        : isSelected
                          ? 'border-primary bg-primary text-white shadow-md'
                          : 'border-muted/10 hover:border-primary/50 text-text-dark bg-white hover:shadow-sm'
                    }`}
                  >
                    {formatInTimeZone(slot, userTimezone, 'h:mm a')}
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="text-muted text-sm">No slots available for this date.</p>
          )}
        </div>

        {error && <div className="p-4 bg-accent-red/10 text-accent-red text-sm font-bold rounded-xl mb-6">{error}</div>}

        <Button 
          onClick={submitForm}
          disabled={!selectedSlot || step === 1 || isSubmitting}
          size="md" 
          className={`w-full ${step === 1 || !selectedSlot ? 'opacity-50 cursor-not-allowed bg-muted text-white' : 'bg-primary text-white shadow-xl hover:scale-[1.02]'}`}
        >
          {isSubmitting ? 'Confirming...' : selectedSlot ? `Confirm Call at ${formatInTimeZone(selectedSlot, userTimezone, 'h:mm a')}` : 'Select a Time'}
        </Button>

      </div>
    </div>
  );
}
