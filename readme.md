# CSV Upload 

This web application, developed using Node.js, Express.js, MongoDB, and Mongoose, follows an MVC (Model-View-Controller) architecture. It enables users to upload CSV files, view a list of uploaded files, delete files, and see detailed file contents in a tabular format. It also includes dynamic pagination and a search feature for data within the table.


## Technologies

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-darkred?style=for-the-badge&logoColor=white)


## Features

- **File Upload:** Users can upload CSV files.
- **File List:** Displays a list of uploaded files.
- **File Deletion:** Allows deletion of uploaded files.
- **File Details:** Displays detailed file contents in a table format.
- **Dynamic Pagination:** Users can select the number of rows displayed per page.
- **Search:** Enables searching data within the table.


### Steps to Setup

1. Clone the repository
2. Install dependencies
3. Run the server from the index.js file 
3. The server will start listening on port 7000.


## Dependencies

- **csv-parser** : Parses the .csv file.  
- **ejs** : Handles dynamic page layouts.
- **express** : Framework for Node.js. 
- **express-ejs-layouts** : To prevent code redundancy.
- **mongoose** : MongoDB ODM tool.
- **multer** : Hanless file uploads and unique name conventions.


## Project Structure

- **`configuratin/`**: Contains all the configurations.
    - **`csv-parser.config.js`**:CSV parser configurations.
    - **`mongoose.config.js`**:Database connection configurations.

- **`middleware/`**: Includes middleware for file uploads.
    - **`fileUpload.middleware.js`**:Middleware for uploading .csv files.

- **`src/`**: Main application code.    
     - **`controller/`**:All the controller files are in this folder
         - **`csv.controller.js`**: Handling product-related operations using the repository.

     - **`model/`**:All the modeling files are in this folder
         - **`csv.model.js`**: Defines database interactions.
         - **`csv.schema.js`**: Mongoose schema defining the structure of the product model.

     - **`route/`**:All the routing files are in this folder 
         - **`csv.route.js`**: Contains route definitions.

     - **`views/`**:All the static files are in this folder. 

         - **`css/`**: All the stylesheets are in this folder.
             - **`/global.css`**:Stylesheet for complete application.

         - **`html/`**: All the templates are in this folder.   
             - **`/error-page.ejs`**:This page will be rendered if any error occurs on the server.
             - **`/file-details.ejs`**:This page represents the detailed view of the file in a table.
             - **`/home-page.ejs`**:This page represents the home page of the application with the list of all uploaded .csv files.
             - **`/layout.ejs`**:This page represents the layout of the application.

         - **`javascript/`**: All the scripting files are in this folder.
             - **`/file-details.js`**:This file has all the scripts of the file details page

- **`uploads/`**:This folder contains all the uploaded files
- **`index.js`**: Entry point of the application.
- **`package-lock.json`**: Takes the record of the versions of all dependencies.
- **`package.json`**: File containing project metadata and dependencies.
- **`README.md`**: Complete information of the project.

## Screenshots

### Home Page
![Home Page](/screenshots/csv-upload-home-page.jpg "Home Page")

### File Details Page
![File Details Page](/screenshots/csv-upload-file-details-page.jpg "File Details Page")


## Author

Akash Verma

## Contact me 

 [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akash-verma-09aug2000/)  [![LeetCode](https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black)](https://leetcode.com/Akash_Verma2000/)  [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:akash.verma217112@gmail.com) 
 [![Naukari](https://img.shields.io/badge/Naukri.com-0A66C2?style=for-the-badge&logo=Naukri.com&logoColor=white)](https://www.naukri.com/mnjuser/profile)
  
## License

This project is licensed under the ISC License.

