const mongoose = require('mongoose');
const DB_URI = process.env.DB_URI || ""

module.exports.connectDatabase = async () => {
    try {
           await mongoose.connect(DB_URI).then((conn) => {

            if(conn.connection) {
                console.log('Connected to database successfully...')
            }

         })
    } 
    
    catch(error) {

        if(error) {
            console.log('Error connecting to database...', error?.message)
        }

    }

}