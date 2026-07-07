import { addDays, set, startOfDay, addMinutes } from 'date-fns';
import { formatInTimeZone, toDate } from 'date-fns-tz';

const TUTOR_TIMEZONE = 'Asia/Kolkata';

// Valid start times in IST (Asia/Kolkata)
// Morning: 5:00 AM to 8:00 AM (Last slot 7:30 AM)
// Evening: 7:00 PM to 12:00 AM (Last slot 11:30 PM)
const VALID_IST_SLOTS = [
  // Morning 5 AM - 8 AM
  { h: 5, m: 0 }, { h: 5, m: 30 },
  { h: 6, m: 0 }, { h: 6, m: 30 },
  { h: 7, m: 0 }, { h: 7, m: 30 },
  
  // Evening 7 PM - 12 AM
  { h: 19, m: 0 }, { h: 19, m: 30 }, // 7:00 PM
  { h: 20, m: 0 }, { h: 20, m: 30 }, // 8:00 PM
  { h: 21, m: 0 }, { h: 21, m: 30 }, // 9:00 PM
  { h: 22, m: 0 }, { h: 22, m: 30 }, // 10:00 PM
  { h: 23, m: 0 }, { h: 23, m: 30 }, // 11:00 PM
];

// Generate all available raw slots in UTC for the next 14 days
export function generateAvailableSlotsUTC(): Date[] {
  const slots: Date[] = [];
  
  // Get today's date in IST
  const now = new Date();
  const todayISTString = formatInTimeZone(now, TUTOR_TIMEZONE, 'yyyy-MM-dd');
  
  // We'll generate 14 days of slots starting from "today" in IST
  for (let i = 0; i < 14; i++) {
    // Parse the date string back into a date object representing midnight in IST
    const currentDateIST = toDate(`${todayISTString}T00:00:00+05:30`);
    const day = addDays(currentDateIST, i);
    
    // Generate the specific slots based on client's split availability
    for (const { h, m } of VALID_IST_SLOTS) {
      // Create the specific time in IST
      const slotISTString = formatInTimeZone(
        day, 
        TUTOR_TIMEZONE, 
        `yyyy-MM-dd'T'${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:00+05:30`
      );
      const slotDate = toDate(slotISTString);
      
      // Only add if it's in the future (plus a 2-hour buffer to avoid last minute bookings)
      if (slotDate.getTime() > now.getTime() + 2 * 60 * 60 * 1000) {
        slots.push(slotDate);
      }
    }
  }
  
  return slots;
}

// Group slots by the user's local date string
export function groupSlotsByTimezone(slots: Date[], userTimezone: string) {
  const grouped: Record<string, Date[]> = {};
  
  slots.forEach(slot => {
    const localDateString = formatInTimeZone(slot, userTimezone, 'yyyy-MM-dd');
    if (!grouped[localDateString]) {
      grouped[localDateString] = [];
    }
    grouped[localDateString].push(slot);
  });
  
  return grouped;
}
