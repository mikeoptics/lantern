import { db } from '$lib/server/db'; // Adjust path based on your project structure
import { patient } from '$lib/server/db/patient'; // Import patient schema

export async function load() {
    try {
        const patients = await db.select().from(patient).execute();
        return { patients };
    } catch (error) {
        console.error('Error fetching patients:', error);
        return { patients: [] }; // Return an empty array if there's an error
    }
}