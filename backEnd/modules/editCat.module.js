const connect = require("../connectDb/conDB");

exports.editNameCat = ({ nameCategory, idCategory }) => {

    return new Promise((resolve, reject) => {


        console.log({ nameCategory, idCategory })


        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT COUNT(*) AS 'count' FROM _categorey WHERE _name = '" + nameCategory + "'"

            connection.query(sql, (err, result, fields) => {

                if (err) throw err;

                if (Boolean(result[0].count)) return reject({ message: false })

                const sql = "UPDATE _categorey SET _name = '" + nameCategory + "' WHERE _idCat = " + idCategory + ""

                connection.query(sql, (err, result, fields) => {

                    connection.end();

                    if (err) throw err;

                    if (result.affectedRows) return resolve({ message: true })

                    reject({ message: false })

                })

            });

        })

    });

};



