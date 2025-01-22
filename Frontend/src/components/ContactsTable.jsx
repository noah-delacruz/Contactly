import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

export default function ContactsTable() {
    const [contacts, setContacts] = useState([]);
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/";

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
            editable: true,
        },
        {
            field: "last_name",
            headerName: "Last Name",
            width: 130,
            editable: true,
        },
        {
            field: "zip_code",
            headerName: "Zip Code",
            width: 130,
            editable: true,
        },
        {
            field: "date_of_birth",
            headerName: "Date of Birth",
            width: 130,
            editable: true,
        },
    ];

    const paginationModel = { page: 0, pageSize: 100 };

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/v1/contacts`);
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

    const handleRowClick = (e) => {
        console.log(e);
    };

    const handleClick = (e) => {
        console.log("clicked");
    };

    return (
        <>
            <h1>Contactly</h1>
            <Paper sx={{ width: "100%" }}>
                <DataGrid
                    editMode="row"
                    rows={contacts}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[100]}
                    // checkboxSelection
                    onCellClick={handleRowClick}
                    sx={{ border: 0 }}
                />
            </Paper>
            {/* <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Zip Code</TableCell>
                            <TableCell align="right">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contacts.map((contact) => (
                            <TableRow
                                key={contact.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {contact.id}
                                </TableCell>
                                <TableCell align="right" onClick={handleClick}>
                                    {contact.first_name}
                                </TableCell>
                                <TableCell align="right">
                                    {contact.last_name}
                                </TableCell>
                                <TableCell align="right">
                                    {contact.zip_code}
                                </TableCell>
                                <TableCell align="right">
                                    {contact.date_of_birth}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}

            {/* <table border="1">
                <thead>
                    <tr>
                        <th onClick={handleClick}>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Zip Code</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.first_name}</td>
                            <td>{contact.last_name}</td>
                            <td>{contact.zip_code}</td>
                            <td>{contact.date_of_birth}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </>
    );
}
