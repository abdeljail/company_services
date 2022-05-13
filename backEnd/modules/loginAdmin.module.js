const connect = require("../connectDb/conDB");
const bcrypt = require("bcrypt");



exports.loginAdmin = ({ email, password }) => {

    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT _IdA , _name , _email , _password , _image FROM _com_admin WHERE _email = '" + email + "';"

            connection.query(sql, (err, result, fields) => {

                if (err) throw err;

                connection.end();

                if (!result.length) return reject({ message: false })

                bcrypt.compare(password, result[0]._password).then(verif => {

                    if (!verif) return reject({ message: false })

                    console.log(result[0]);

                    const { _IdA, _name, _email, _image } = result[0]


                    resolve({ _IdA, _name, _email, _image })

                })

            });

        })

    });

};



