import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

export default function ContactsTable() {
    const [contacts, setContacts] = useState([]);

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 130,
        },
        {
            field: "first_name",
            headerName: "First Name",
            width: 130,
        },
        {
            field: "last_name",
            headerName: "Last Name",
            width: 130,
        },
        {
            field: "zip_code",
            headerName: "Zip Code",
            width: 130,
        },
        {
            field: "date_of_birth",
            headerName: "Date of Birth",
            width: 130,
        },
    ];

    const paginationModel = { page: 0, pageSize: 100 };

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/v1/contacts"
                );
                setContacts(response.data);
            } catch (error) {
                console.error("Error fetching contacts: ", error);
            }
        };
        fetchContacts();
    }, []);

    // Log contacts after they update
    useEffect(() => {
        console.log("Contacts updated:", contacts);
    }, [contacts]);

    return (
        <>
            <h1>Contactly</h1>
            <Paper sx={{ width: "100%" }}>
                <DataGrid
                    rows={contacts}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[100]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </>
    );
}
