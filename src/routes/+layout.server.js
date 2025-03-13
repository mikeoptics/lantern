import * as auth from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';

export const load = async (event) => {
	if (event.url.pathname === '/') {
		redirect(302, '/app');
	}

	switch (event.url.pathname) {
		case '/logout':
			if (!event.locals.session) redirect(302, '/login');
			await auth.invalidateSession(event.locals.session.id);
			auth.deleteSessionTokenCookie(event);
			redirect(302, '/login');
		case '/login':
			if (event.locals.session) redirect(302, '/app');
			return {};
		default:
			if (event.locals.session)
				return {
					user: event.locals.user,
					source: event.url.pathname
				};
			redirect(302, '/login');
	}
};
