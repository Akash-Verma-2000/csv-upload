//This file represents the schema of the data in the data base 

//Importing mongoose 
import mongoose from "mongoose";

export const csvSchema = new mongoose.Schema({
    //Name of the file 
    fileName: String,

    //This array contains all the objects of each table row
    file: Array,

    //Uploading date  
    date: {
        type: String,
        default: getCurrentDate(),
    }
});

//This is function returns the current data in dd/mm/yyyy formate so that uploading date can also be stored
function getCurrentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month starts from 0
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
}