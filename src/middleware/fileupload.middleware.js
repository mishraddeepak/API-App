const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads/')
    },
    filename:(req,res)=>{
        cb(
            null,
            newDate().toISOString() + file.originalname
        )
    }
})
const upload = multer({ storage:storage,
})