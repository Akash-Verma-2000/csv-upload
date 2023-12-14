//importing all the necessary modules 
import express from "express";
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import { connectToMongoose } from "./configuratin/mongoose.config.js";
import { csvRouter } from "./src/route/csv.route.js";

//server initialization
const server = express();

//setting up the view engines
server.set('view engine', 'ejs');

// Setting up views directory for rendering EJS files
server.set('views', path.join(path.resolve(), 'src', 'views', 'html'));

// Using EJS layouts for rendering
server.use(ejsLayouts);

// Serving static files from the views directory
server.use(express.static('src/views'));

// Parsing incoming request bodies
server.use(express.urlencoded({ extended: true }));

// Using the CSV router for handling routes
server.use("/", csvRouter);

// // Error handling middleware for handling server errors
// server.use((req, res) => {
//     return res.status(500).render("error-page");
// })

// Error handling middleware for handling errors with 'next()' parameter
server.use((err, req, res, next) => {
    return res.status(500).render("error-page");
})

// Listening on port 7000
server.listen(7000, () => {
     // Connecting to Mongoose 
    connectToMongoose();
    console.log("The server is working on port 7000");
})