import { pgTable, text, integer, date, timestamp,uuid } from 'drizzle-orm/pg-core';

export const patient = pgTable('patient', {
	id: uuid('id').primaryKey().defaultRandom(), // FHIR: id (Globally Unique Identifier)
	identifier: text('identifier').notNull().unique(), // FHIR: identifier
	active: integer('active').notNull().default(1), // FHIR: active (1 = true, 0 = false)
	givenName: text('given_name').notNull(), // FHIR: name.given
	familyName: text('family_name').notNull(), // FHIR: name.family
	birthDate: date('birth_date').notNull(), // FHIR: birthDate
	gender: text('gender').notNull(), // FHIR: gender

	// Contact details (FHIR: telecom)
	phone: text('phone'), // FHIR: telecom.system = phone
	email: text('email'), // FHIR: telecom.system = email

	// Structured address fields (FHIR: address)
	addressUse: text('address_use'), // home | work | temp | old | billing
	addressType: text('address_type'), // postal | physical | both
	addressLine1: text('address_line_1').notNull(), // Street name and number
	addressLine2: text('address_line_2'), // Apartment, suite, unit, etc.
	city: text('city').notNull(), // City
	district: text('district'), // County or borough
	state: text('state'), // State or province
	postalCode: text('postal_code').notNull(), // Postal code
	country: text('country').notNull(), // Country
	periodStart: date('period_start'), // Start date of address validity
	periodEnd: date('period_end'), // End date of address validity

	// Metadata
	createdAt: timestamp('created_at', { withTimezone: true, mode: 'date' }).defaultNow(), // Record creation timestamp
	updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'date' }).defaultNow().notNull()
});
