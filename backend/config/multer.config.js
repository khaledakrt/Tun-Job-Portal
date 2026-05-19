 
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'logo') cb(null, 'uploads/logos/');
        else if (file.fieldname === 'avatar') cb(null, 'uploads/avatars/');
        else cb(null, 'uploads/cv_files/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

module.exports = multer({ storage: storage });
