const connect = require("../connectDb/conDB");


exports.addNameCat = ({ nameCategory }) => {

    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT COUNT(*) AS 'count' FROM _categorey WHERE _name = '" + nameCategory + "'"

            connection.query(sql, (err, result, fields) => {

                if (err) throw err;

                if (Boolean(result[0].count)) return reject({ message: false })

                const sql = "INSERT INTO _categorey (_name, _dateCreate) VALUES ('" + nameCategory + "', NOW())"

                connection.query(sql, (err, result, fields) => {

                    connection.end();

                    if (err) throw err;

                    if (result.insertId) return resolve({ message: true })

                })

            });

        })

    });

};



