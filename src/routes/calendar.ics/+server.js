// src/routes/calendar/+server.js

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
    const formatICSDate = (date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
  
    const icsContent = `BEGIN:VCALENDAR
  VERSION:2.0
  PRODID:-//Custom SvelteKit Calendar//EN
  CALSCALE:GREGORIAN
  
  BEGIN:VEVENT
  UID:evt-001@example.com
  DTSTAMP:${formatICSDate(new Date())}
  DTSTART:20231201T150000Z
  DTEND:20231201T160000Z
  SUMMARY:Your First Event
  DESCRIPTION:This is a custom event in your SvelteKit calendar.
  LOCATION:Online
  END:VEVENT
  
  BEGIN:VEVENT
  UID:evt-002@example.com
  DTSTAMP:${formatICSDate(new Date())}
  DTSTART:20231215T100000Z
  DTEND:20231215T110000Z
  SUMMARY:Another Event
  DESCRIPTION:Details for the second event.
  LOCATION:123 Main St
  END:VEVENT
  
  END:VCALENDAR`;
  
    return new Response(icsContent, {
      headers: {
        'Content-Type': 'text/calendar',
        'Content-Disposition': 'attachment; filename="calendar.ics"',
      },
    });
  }
  