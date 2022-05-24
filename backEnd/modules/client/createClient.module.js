const connect = require("../../connectDb/conDB");
const bcrypt = require("bcrypt");
exports.createClient = ({ fullName, email, password }) => {


    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT COUNT(*) AS count FROM _client WHERE _email = '" + email + "';"

            connection.query(sql, (err, result, fields) => {

                if (err) throw err;

                if (Boolean(result[0].count)) return reject({ message: false })

                let hash  = bcrypt.hashSync(password, 10);

                const sql = "INSERT INTO _client ( `_name`, `_email`, `_password`,`_image`, `_dateCreate`) VALUES ('" + fullName + "', '" + email + "' ,'" + hash + "' ,' defaultImage.png', NOW())"

                connection.query(sql, (err, result, fields) => {

                    connection.end();

                    if (err) throw err;

                    if (result.insertId) return resolve({ message: true })

                })

            });

        })

    });

};