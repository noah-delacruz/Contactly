import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import ContactsTable from "./components/ContactsTable";

function App() {
    return (
        <>
            <ContactsTable />
        </>
    );
}

export default App;
