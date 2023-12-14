//This is intract with the data base

//Importing all the neccessary modules
import mongoose from "mongoose";
import { csvSchema } from "./csv.schema.js";

//Making the model of the csvSchema 
const CsvModel = mongoose.model('CSV', csvSchema);

//This file contains all the data base related functions 
export default class CsvModelClass {

    //This function return all the documents from the csv collection from the data base 
    async getAllCSVs() {
        try {
            //Returnig all the documents of the csvs collection
            return await CsvModel.find();
        } catch (err) {
            //Handling unexpected errors in this function
            throw err;
        }
    }

    //This function deletes the file with the specific id from the data base
    async deleteFileById(fileId) {
        try {
            //Deleting the id from the data base
            await CsvModel.findByIdAndDelete(fileId);
            //Returning rest of the documents 
            return CsvModel.find();
        } catch (err) {
            //Handling unexpected errors in this function
            throw err;
        }
    }

    //This function returns the specific document with the given id 
    async getFileDetailsById(fileId) {
        try {
            //Returning the document with the specific id
            return CsvModel.findById(fileId);
        } catch (err) {
            //Handling unexpected errors in this function
            throw err;
        }
    }

    //This function uploads the request file on the data base
    async uploadCsvFile(fileName, fileArray) {
        try {
            //Making the object that will be uploaded on the data base
            const fileObj = {
                fileName: fileName,
                file: fileArray
            }
            //Making the model
            const newFile = new CsvModel(fileObj);
            //Uploading the document
            await newFile.save();
            //Returning all the documents in the csvs collection
            return CsvModel.find();
        } catch (err) {
            //Handling unexpected errors in this function
            throw err;
        }
    }


}