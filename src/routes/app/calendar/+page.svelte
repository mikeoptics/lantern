<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { CalendarCheck, CalendarPlus } from 'lucide-svelte';

	const calendarUrl = 'http://localhost:5173/calendar.ics';

	const googleCalendarUrl = `https://www.google.com/calendar/render?cid=${encodeURIComponent(calendarUrl)}`;
</script>

<div class="flex flex-col items-center justify-center gap-6 p-8">
	<h2 class="text-3xl font-semibold">Subscribe to Our Calendar</h2>
	<p class="text-muted-foreground">Stay updated by adding our events to your calendar.</p>

	<div class="flex gap-4">
		<Button asChild variant="outline">
			<a href={googleCalendarUrl} target="_blank">
				<CalendarPlus class="mr-2 h-5 w-5" /> Google Calendar
			</a>
		</Button>

		<Button asChild>
			<a href={calendarUrl} target="_blank">
				<CalendarCheck class="mr-2 h-5 w-5" /> Apple/Outlook
			</a>
		</Button>
	</div>
</div>
