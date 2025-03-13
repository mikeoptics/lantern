export async function GET() {
    const icsContent = `BEGIN:VCALENDAR
  VERSION:2.0
  PRODID:-//Custom SvelteKit Calendar//EN
  
  BEGIN:VEVENT
  UID:evt-001@example.com
  DTSTAMP:${new Date().toISOString().replace(/[-:.]/g, '').slice(0, 15)}Z
  DTSTART:20231201T150000Z
  DTEND:20231201T160000Z
  SUMMARY:Your First Event
  DESCRIPTION:This is a custom event in your SvelteKit calendar.
  LOCATION:Online
  END:VEVENT
  
  BEGIN:VEVENT
  UID:evt-002@example.com
  DTSTAMP:${new Date().toISOString().replace(/[-:.]/g, '').slice(0, 15)}Z
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
  