// IMPORT MONGOOSE LIBRARY
import mongoose from "mongoose";
// ASYNCHRONOUS FUNCTION TO CONNECT TO MONGODB DATABASE
export const connectToMongoose = async () => {
    try {
        // ATTEMPT TO ESTABLISH A CONNECTION TO MONGODB DATABASE
        await mongoose.connect("mongodb+srv://akashverma217112:OO7aWrO7YrzdvWCu@cluster0.w7eevsd.mongodb.net/?retryWrites=true&w=majority");
        // LOG SUCCESS MESSAGE IF CONNECTION IS SUCCESSFUL
        console.log("Mongoose is connected.");
    } catch (err) {
        // LOG ERROR MESSAGE IF CONNECTION FAILS
        console.log("Failed To Connect To Mongoose.");
        // LOG THE ERROR DETAILS
        console.log(err);

    }
}