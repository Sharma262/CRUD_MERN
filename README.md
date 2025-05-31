# 📱 MERN Stack Phone Book CRUD App

A full-stack **Phone Book** application built using the **MERN stack** — MongoDB, Express.js, React.js, and Node.js. This app allows users to **Create**, **Read**, **Update**, and **Delete** contact records with just a **name** and **phone number**.

---

## 🔧 Tech Stack

- **Frontend**: React, Axios, CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose

---

## ✨ Features

- 📋 View all contacts in a clean table layout
- ➕ Add new contact with name and phone number
- ✏️ Edit existing contact details
- 🗑️ Delete any contact
- 💡 Modal form for add/update
- ⚡ Responsive and modern UI
- 🔗 Axios used for API communication

---

## 📁 Folder Structure

```
mern-phonebook/
├── backend/
│   ├── server.js
│   └── models/
│       └── Phone.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── App.css
│       └── components/
│           ├── Table.js
│           ├── Table.css
│           ├── FormModal.js
│           └── FormModal.css
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Sharma262/CRUD_MERN.git
cd CRUD_MERN
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

#### Start Backend Server

```bash
node index.js
```

Or with nodemon:

```bash
npx nodemon index.js
```

Server will start on: `http://localhost:5000`

---

### 3. Frontend Setup

```bash
cd ../client
npm install
npm start
```

Frontend will start on: `http://localhost:5173/`

---

## 🔗 API Endpoints

| Method | Endpoint                        | Description              |
|--------|----------------------------------|--------------------------|
| GET    | `/get-phone`                    | Fetch all contacts       |
| POST   | `/add-phone`                    | Add a new contact        |
| PUT    | `/update-phone/:id`            | Update a contact by ID   |
| DELETE | `/delete-phone/:id`            | Delete a contact by ID   |

---

## 📦 Dependencies

### Backend

- express
- mongoose
- cors
- nodemon (dev)

### Frontend

- react
- axios
- react-dom
- react-scripts

---

## 📜 License

MIT License. Feel free to use and modify as needed.

---

## 🙌 Acknowledgements

Built for learning purposes using the MERN stack 🚀
