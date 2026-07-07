import { addDays, set, startOfDay, addMinutes } from 'date-fns';
import { formatInTimeZone, toDate } from 'date-fns-tz';

const TUTOR_TIMEZONE = 'Asia/Kolkata';

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
    
    // 5 AM to 8 PM (last slot 7:30 PM)
    for (let hour = 5; hour <= 19; hour++) {
      for (let minute of [0, 30]) {
        // Create the specific time in IST
        const slotISTString = formatInTimeZone(day, TUTOR_TIMEZONE, `yyyy-MM-dd'T'${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:00+05:30`);
        const slotDate = toDate(slotISTString);
        
        // Only add if it's in the future (plus a 2-hour buffer to avoid last minute bookings)
        if (slotDate.getTime() > now.getTime() + 2 * 60 * 60 * 1000) {
          slots.push(slotDate);
        }
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
