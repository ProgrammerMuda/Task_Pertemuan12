const db = require('../config/database.js');
class Student {

    static all(){

        return new Promise((resolve, reject) => {

            const queryGetAll = "SELECT * FROM students";
            db.query(queryGetAll, (err, results) => {
                resolve(results);
            });

        });   
    }

    static async show(id) {
        return new Promise((resolve, reject) => {
          const query = "SELECT * FROM students WHERE id = ? LIMIT 1;";
          db.query(query, [id], (err, results) => {
                    if (err) {
                        reject(err);
                        return;
                    }
            resolve(results);
          });
        });
      }
    
      static async create(data) {
        return new Promise((resolve, reject) => {
          const query = "INSERT INTO students SET ?;";
          db.query(query, data, (err, results) => {
                    if (err) {
                        reject(err);
                        return;
                    }
            resolve(results);
          });
        });
      }
}

module.exports = Student;