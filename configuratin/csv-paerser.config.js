//Importing all the neccessary modules 
import csv from 'csv-parser';
import fs from 'fs';

// Function to parse CSV file
export function csvParser(fileName) {
    return new Promise((resolve, reject) => {
        // Array to store parsed CSV data
        const results = [];

        fs.createReadStream(fileName)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve(results);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}