//Importing the neccessary modules
import CsvModel from "../model/csv.model.js";
import { csvParser } from "../../configuratin/csv-paerser.config.js";
import path from 'path';

//Making the object of CsvModel class
const csvModel = new CsvModel();

//This class contains all the routing functions 
export default class CsvController {

    //This function renders the home page with list of the uploaded files
    async getHomePage(req, res) {
        try {
            //Getting all list of all uploaded files from the data base 
            const docs = await csvModel.getAllCSVs();
            //Rendering the home page with file list
            return res.status(200).render('home-page', { docs, message: "" });
        } catch (err) {
            //Here I am handling all the unexpected error in this function
            return res.status(500).render("error-page");
        }
    }

    //This function deletes the file from the server and renders the home page again
    async deleteFileById(req, res) {
        try {
            //Deleting the specific file with the given id and returning the list of rest files 
            const docs = await csvModel.deleteFileById(req.params.id);
            //Rendering home page with the list of all the rest files 
            return res.status(200).render('home-page', { docs, message: "File has been deleted" });
        } catch (err) {
            //Here I am handling all the unexpected error in this function
            return res.status(500).render("error-page");
        }
    }

    // This function renders the file details page on the client side 
    async getFileDetailsById(req, res) {
        try {
            //Getting the document with complete data 
            const doc = await csvModel.getFileDetailsById(req.params.id);
            //Rendering the file details with the complete info of the specific file 
            return res.status(200).render('file-details', { doc });
        } catch (err) {
            //Here I am handling all the unexpected error in this function
            return res.status(500).render("error-page");
        }
    }

    //This function uploads the files on the database 
    async uploadCsvFile(req, res) {
        try {

            //Getting the extension of the request file 
            const fileExtension = path.extname(req.file.path);

            //Checking if the request file is .csv file or not 
            if (fileExtension != ".csv") {
                const docs = await csvModel.getAllCSVs();
                //If the request file is not a .csv file 
                return res.status(201).render('home-page', { docs, message: "Only .csv File Are Allowed" });
            }

            //Getting the file name 
            const fileName = req.file.filename;
            //Parsing the file data using csv-parser librery
            const fileArray = await csvParser(req.file.path);
            //Uploading the file on the data base
            const docs = await csvModel.uploadCsvFile(fileName, fileArray);
            //Rendering the home page again with the list of all file with new file as well
            return res.status(201).render('home-page', { docs, message: "File has been uploaded" });

        } catch (error) {
            //Here I am handling all the unexpected error in this function
            return res.status(500).render("error-page");
        }
    }
}


