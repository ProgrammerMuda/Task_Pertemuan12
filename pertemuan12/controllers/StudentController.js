
const students = require('../data/student');


class StudentController {

    async index(req, res) {

      const murid = await students.all()
   
              const response = {
                "message": "get all students",
                "data": murid
              };

              res.json(response);
       
    }

    async show(req, res) {
        try {
          const { id } = req.params;
          const detailStudent = await students.show(id);
    
        
          if (detailStudent.length < 1) {
            const data = {
              message: "Student tidak ditemukan",
            };
            return res.status(404).json(data);
          }
    
          const data = {
            message: "Menampilkan detail student",
            data: detailStudent[0],
          };
          return res.status(200).json(data);
        } catch (err) {
          return res.status(500).json({
            message: "err: " + err.message,
          })
        }
      }

      async store(req, res) {
        try {
          const { name, nim, prodi, address } = req.body;

          if (typeof name == 'undefined') {
            const data = {
              message: `field name is required`,
            };
            return res.status(400).json(data);  
          }
        
          if (typeof nim == 'undefined') {
            const data = {
              message: `field nim is required`,
            };
            return res.status(400).json(data);  
          }
          
          if (typeof prodi == 'undefined') {
            const data = {
              message: `field prodi is required`,
            };
            return res.status(400).json(data);  
          }
        
          if (typeof address == 'undefined') {
            const data = {
              message: `field address is required`,
            };
            return res.status(400).json(data);  
          }
    
          const dataStudent = {
            name,
            nim,
            prodi,
            address,
          };
          const insertStudent = await students.create(dataStudent);
          const detailDataStudent = await students.show(insertStudent.insertId);
    
          const data = {
            message: `Menambahkan data students`,
            data: detailDataStudent[0],
          };
    
          return res.status(201).json(data);
        } catch (err) {
          return res.status(500).json({
            message: "err: " + err.message,
          })
        }
      }
    
}

const object = new StudentController();

module.exports = object;