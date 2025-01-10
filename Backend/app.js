import Database from "better-sqlite3";
import express from "express";
import { contacts } from "./contactData.js";
import fs from "fs";
import { faker } from "@faker-js/faker";
import cors from "cors";

const app = express();
app.use(cors());

const db = new Database("contacts.db");

app.get("/api/v1/contacts", (req, res) => {
    try {
        const query = "SELECT * FROM contacts";
        const users = db.prepare(query).all(); // Returns array of objects to return for express API endpoints
        res.json(users);
    } catch (error) {
        console.error("Error fetching contacts: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
