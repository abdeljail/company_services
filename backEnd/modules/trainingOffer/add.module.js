const connect = require("../../connectDb/conDB");


exports.addTraining = ({ idC, idF }) => {

    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT COUNT(*) AS count FROM _request WHERE _IdC= '" + idC + "' AND _IdF = '" + idF + "' ;"

            connection.query(sql, (err, result, fields) => {

                if (err) throw err;

                if (Boolean(result[0].count)) return reject({ message: false })

                const sql = "INSERT INTO _request ( `_IdC`, `_IdF`, `_vu`, `_dateCreate`) VALUES ('" + idC + "' , '" + idF + "', 0 , NOW())"

                connection.query(sql, (err, result, fields) => {

                    connection.end();

                    if (err) throw err;

                    if (result.insertId) return resolve({ message: true })

                })

            });

        })

    });

};