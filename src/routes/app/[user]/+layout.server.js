import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {
    // Ensure user is authenticated
    if (!locals.user) {
        throw redirect(302, '/login'); // Redirect unauthenticated users
    }
/*

    // Ensure user is accessing their own page
    if (params.user !== locals.user.username) {
        throw redirect(302, '/app'); // Redirect if not authorized
    }
*/
 
};