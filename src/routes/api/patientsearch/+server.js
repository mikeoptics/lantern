import { eq, ilike, or } from 'drizzle-orm'; // Comparison operators from Drizzle ORM
import { db } from '$lib/server/db'; // Custom database instance for handling queries
import { patient } from '$lib/server/db/patient'; 
import { validate as isValidUUID } from 'uuid'; // Import uuid to validate the query


/** Search patients by name or ID.
/** @type {import('./$types').RequestHandler} */
export async function GET({url}) {
	// Ensure query is treated as a string when comparing to ID
	const query = url.searchParams.get('query') ?? '';


    const result = await db
        .select()
        .from(patient)
        .where(
            or(
                // Search by givenName or familyName if not a valid UUID
                ilike(patient.givenName, `${query}%`),
                ilike(patient.familyName, `${query}%`),
                // If it's a valid UUID, search by ID
				isValidUUID(query) ? eq(patient.id, query) : null
            )
        )
        .execute();
	return new Response(JSON.stringify(result ?? []), {
		status: result ? 200 : 404,
		headers: {
			'Content-Type': 'application/json'
		},
	}) 
	}