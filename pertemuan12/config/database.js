const mysql = require("mysql");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database:"student_express"

    }
);

db.connect((err)=> {

    if(err){
        console.log(`db connection is failed, error: ${err.stack}`);
        return;
    } else{
        console.log("db connection is success");
        return;
    }

});

module.exports = db;