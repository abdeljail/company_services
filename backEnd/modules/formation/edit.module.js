const connect = require("../../connectDb/conDB");

exports.edit = ({sel , id}) => {

    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT COUNT(*) AS 'count' FROM _formation WHERE _idF = '" + id + "'"

            connection.query(sql, (err, result, fields) => {

                if (err) throw err;

                if (!Boolean(result[0].count)) return reject({ message: false })

                const sql = "UPDATE _formation SET " + sel + " WHERE _idF = " + id + ""

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



