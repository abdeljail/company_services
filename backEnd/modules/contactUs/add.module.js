const connect = require("../../connectDb/conDB");

exports.addMessage = ({ fullName, email, object, message }) => {

    console.log({ fullName, email, object, message })
    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            const sql = "INSERT INTO `_contactus` (`_name`, `_email`, `_objet`, `_message`, `_vu`, `_date`) VALUES('" + fullName + "','" + email + "' ,'" + object + "','" + message + "', 0 ,NOW())"
            connection.query(sql, (err, result, fields) => {

                connection.end();

                if (err) throw err;

                if (result.insertId) return resolve({ message: true })
                return reject({ message: false })

            })
        });
    });

};