//Importing express for handling routes
import express from "express";

//Importing other neccessary modules
import CsvController from "../controller/csv.controller.js";
import { upload } from "../../middleware/fileUpload.middleware.js";

//Object of the CsvController class
const csvController = new CsvController();

//Creating routing object
export const csvRouter = express.Router();

//Handling get request for rendering home page
csvRouter.get("/", csvController.getHomePage);

//Handling get request for rendering file-details page 
csvRouter.get("/details/:id", csvController.getFileDetailsById);

//Hanling post request for deleting the file from the server
csvRouter.post("/delete/:id", csvController.deleteFileById);

//Handling post request for uploading .csv files 
csvRouter.post("/upload", upload.single('fileName'), csvController.uploadCsvFile);





