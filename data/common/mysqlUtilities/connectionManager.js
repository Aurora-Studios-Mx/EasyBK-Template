// MySQL - Helper in create pool connection
// Aurora Stdios Services
// @zairdeluque - The creator

//.env
require('dotenv').config({ path: './.env'})

//Requires
const mysql = require('mysql2/promise');

//Export
async function Connection(){
    try{
        //I can change string values for variables in .env
        const CNx0 = await mysql.createConnection({
            host: '0.0.0.0',
            port: 3306,
            user: 'root',
            password: 'root',
            database: 'database'
        })
        return CNx0;
    }
    catch(err){
        console.log("[ERR] Utility mysql DBx0 throw error: " + err);
        throw err;
    }
}

module.exports = { Connection };