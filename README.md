# HoopIntel - Contact Management App

## 📌 Overview

HoopIntel is a full-stack application that manages a large dataset of **20,000 contacts** stored in an SQLite database. It supports **sorting, pagination, and updating records** efficiently. This project was built to explore full-stack engineering concepts.

## 🛠 Tech Stack

-   **Frontend**: React, Material UI
-   **Backend**: Express, SQLite
-   **Hosting**:
    -   Frontend: [Vercel](https://vercel.com/)
    -   Backend: [Railway](https://railway.app/)

## 🚀 Installation & Setup

1. **Clone the repository**

    ```sh
    git clone https://github.com/yourusername/hoopintel.git
    cd hoopintel
    ```

2. **Backend Setup**

    ```sh
    cd backend
    # Create and insert data into SQLite database
    npm install
    npm run start
    ```

3. **Frontend Setup**

    ```sh
    cd frontend
    npm install
    npm run dev
    ```

## 🏭 Features

✅ Loads **20,000 contacts** (first name, last name, date of birth, zip code)\
✅ **Pagination** support for large datasets\
✅ **Sorting** by any column field\
✅ **Edit/Update** any record

## 🌍 API Endpoint

### Get All Contacts

```js
app.get("/api/v1/contacts", (req, res) => {
    try {
        const sortField = req.query.sort || "ID";
        const sortOrder = req.query.order || "asc";
        const query = `SELECT * FROM contacts ORDER BY ${sortField} ${sortOrder}`;
        const users = db.prepare(query).all();
        res.json(users);
    } catch (error) {
        console.error("Error fetching contacts: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
```

📌 This API retrieves all contacts with **sorting** support via query parameters (`sort` and `order`).

## 📛 License

This project is licensed under the **MIT License**.
