const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

db.connect((err) => {
    if(err){
        console.log("Error connecting to the database")
        return;
    }
    console.log("Database Connected success!");
})

app.get('/', (req, res) => {
    console.log("Default router");

    db.query('select * from todoitems', (err, result) => {
        if(err) {
            console.log("Error occured in getting results from database\n",err);
            return;
        } 
        console.log("Data: ", result)
        res.send(result);
    });

})

app.post('/add-item',  (req, res) => {
    console.log(req.body);
    
    db.query(`insert into todoitems(itemDescription) values ("${req.body.text}");`, (err, results) => {
        if(err){
            console.log("Error occured adding to database", err);
            return;
        }
        console.log("Created successfully");
    });

    res.send("Added successfully");
})

app.put('/edit-item', (req, res) =>{
    console.log("Line 54: ", req.body);
    db.query(`update todoitems set itemDescription="${req.body.itemDescription}" where ID=${res.body.ID});`, (err, results) => {
        if(err){
            console.log("Error occured editing to database", err);
            return;
        }
        console.log("Created successfully");
    });

    res.send("Updated successfully");
})

app.delete('/delete-item', (req, res) =>{
    console.log("Line 54: ", req.body);
    db.query(`delete from todoitems where ID = ${req.body.ID};`, (err, results) => {
        if(err){
            console.log("Error occured deleting to database", err);
            return;
        }
        console.log("Created successfully");
    });

    res.send("Updated successfully");
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})