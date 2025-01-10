/* CREATE A TABLE
-------------------------------------------------------
const query = `
    CREATE TABLE contacts (
        id INTEGER PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        zip_code TEXT NOT NULL,
        date_of_birth TEXT NOT NULL
    )
`;

db.exec(query);
*/

/* INSERT DATA INTO TABLE
-------------------------------------------------------
const insertDataQuery = db.prepare(
    "INSERT INTO contacts (first_name, last_name, zip_code, date_of_birth) VALUES (?, ?, ?, ?)"
);

contacts.forEach((contact) => {
    insertDataQuery.run(
        contact.first_name,
        contact.last_name,
        contact.zip_code,
        contact.date_of_birth
    );
});
*/

/* RETRIEVE DATA FROM TABLE
-------------------------------------------------------
const query = "SELECT * FROM contacts";
const users = db.prepare(query).all(); // Returns array of objects to return for express API endpoints
console.log(users);
*/

/*
// Helper function to validate English alphabet names and 5-digit zip codes
const isValidContact = (contact) => {
    const nameRegex = /^[A-Za-z]+$/; // Only English alphabet letters
    const zipCodeRegex = /^\d{5}$/; // Exactly 5 digits

    return (
        nameRegex.test(contact.first_name) &&
        nameRegex.test(contact.last_name) &&
        zipCodeRegex.test(contact.zip_code)
    );
};

const generateContacts = (count) => {
    const contacts = [];
    while (contacts.length < count) {
        const contact = {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            zip_code: faker.location.zipCode("#####"), // 5-digit zip code format
            date_of_birth: faker.date
                .birthdate({ min: 1950, max: 2005, mode: "year" })
                .toISOString()
                .split("T")[0],
        };

        // Only add the contact if it passes validation
        if (isValidContact(contact)) {
            contacts.push(contact);
        }
    }

    return contacts;
};

// Generate 20,000 contacts and save to a JSON file
const contacts = generateContacts(20000);
fs.writeFileSync("contacts.json", JSON.stringify(contacts, null, 2));

console.log("Generated 20,000 valid contacts!");
*/
