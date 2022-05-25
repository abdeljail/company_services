const connect = require("../../connectDb/conDB");


exports.addApplication = ({ name, idC, cv }) => {

    return new Promise((resolve, reject) => {


        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "INSERT INTO " + name + " ( `_IdC`, `_cv`, `_vu`, `_dateCreate`) VALUES ('" + idC + "' , '" + cv + "', 0 , NOW())"

            connection.query(sql, (err, result, fields) => {

                connection.end();

                if (err) throw err;

                if (result.insertId) return resolve({ message: true })

                return reject({ message: false })
            })


        })

    });

};