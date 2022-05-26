const connect = require("../../connectDb/conDB");

exports.allIntern = () => {

    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT f._idI , f._vu , f._dateCreate , c._name AS 'nameClient' FROM  _internship f INNER JOIN _client c ON c._idC = f._idC LIMIT 4 ;"

            connection.query(sql, (err, result, fields) => {

                connection.end();

                if (err) throw err;

                return resolve({ intern: result })

            });

        })

    });

};

exports.tenIntern = ({ numberIntern }) => {
    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT f._idI , f._vu , f._dateCreate , c._name AS nameClient FROM  _internship f INNER JOIN _client c ON c._IdC = f._IdC AND f._IdI >" + numberIntern + "  LIMIT 4;"


            connection.query(sql, (err, result, fields) => {

                connection.end();

                if (err) throw err;

                return resolve({ Intern: result })

            });

        })

    });

};

exports.deleteIntern = ({ id }) => {

    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT COUNT(*) AS count FROM  _internship WHERE _IdI = " + id + ""

            connection.query(sql, (err, result, fields) => {

                if (err) throw err;

                if (!Boolean(result[0].count)) return reject({ delete: false })

                const sql = "DELETE  FROM  _internship WHERE _IdI = " + id + ""

                connection.query(sql, (err, result, fields) => {

                    connection.end()

                    if (err) throw err;

                    return resolve({ delete: true })

                })

            });

        })

    });

};








