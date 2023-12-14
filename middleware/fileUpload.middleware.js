// Importing multer 
import multer from 'multer';

//Storage settings
const storage = multer.diskStorage({
    //Setting the destination
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    //Setting unique name for each file
    filename: (req, file, cb) => {
        const uniqueSuffix = '-' + Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = file.originalname.split('.').pop();
        const fileName = file.originalname.replace(`.${fileExtension}`, `${uniqueSuffix}.${fileExtension}`);
        cb(null, fileName);

    }
});


const upload = multer({ storage: storage });
export { upload };

