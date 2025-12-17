# Todo List Application

A full-stack MERN (MySQL, Express, React, Node.js) todo list application that allows users to create, read, update, and delete todo items with a clean and intuitive interface.

## Project Structure

```
Todo/
├── Backend/
│   ├── server.js          # Express server with API endpoints
│   ├── package.json       # Backend dependencies
│   └── ...
└── Frontend/
    ├── todolist.html      # Frontend UI
    └── ...
```

## Features

- Add new todo items
- View all todo items
- Delete todo items
- Edit todo items
- Clean and responsive UI with Bootstrap
- MySQL database integration

## Tech Stack

**Backend:**
- Node.js
- Express.js
- MySQL
- CORS enabled for frontend communication

**Frontend:**
- HTML5
- CSS3
- Bootstrap 5
- Vanilla JavaScript

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14 or higher)
- MySQL Server
- npm (Node Package Manager)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Todo.git
cd Todo
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

### 3. Database Setup

Create a MySQL database and table:

```sql
CREATE DATABASE todo;
USE todo;
CREATE TABLE todoitems (
  id INT AUTO_INCREMENT PRIMARY KEY,
  itemDescription VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. Configure Database Connection

Edit `Backend/server.js` and update the database credentials:

```javascript
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'todo'
});
```

## Running the Application

### Start the Backend Server

```bash
cd Backend
npm start
```

The server will run on `http://localhost:3000`

### Open the Frontend

Open `Frontend/todolist.html` in your web browser, or serve it using a local server:

```bash
# Using Node.js (http-server)
npx http-server Frontend/
```

Then navigate to `http://localhost:8000/todolist.html`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Retrieve all todo items |
| POST | `/add-item` | Add a new todo item |
| DELETE | `/delete-item/:id` | Delete a todo item |
| PUT | `/update-item/:id` | Update a todo item |


## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the ISC License.

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---
