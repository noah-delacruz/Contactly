import Database from "better-sqlite3";
import { contacts } from "./contactData.js";
import axios from "axios";
import fs from "fs";
import falso from "@ngneat/falso";

const db = new Database("contacts.db");

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

/*
async function generateContacts() {
    let contacts = [];
    for (let i = 0; i < 200; i++) {
        // Get 100 random user data
        const response = await axios("https://randomuser.me/api/?results=100");

        // Add relevant data from 100 random users to contacts array of objects
        contacts = contacts.concat(
            response.data.results.map((user) => ({
                first_name: user.name.first,
                last_name: user.name.last,
                zip_code: user.location.postcode.toString(),
                date_of_birth: user.dob.date.split("T")[0],
            }))
        );
    }

    // Write all contact data to a json file
    fs.writeFileSync("contacts.json", JSON.stringify(contacts, null, 2));
    console.log("Generated 20,000 contacts");
}

generateContacts();
*/
