const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://new_user:new_password@cluster0.aocgid8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


const db = mongoose.connection
db.on("error",console.error.bind(console,'eror in connecting'))
db.once('open',()=>{console.log('db connection successfull')})

module.exports=db