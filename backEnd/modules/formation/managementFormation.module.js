const connect = require("../../connectDb/conDB");


exports.allFormations = () => {

    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT f._idF , f._name , f._description , f._Goals ,f._image , f._dateCreate , c._name AS 'nameCat'  FROM  _formation f INNER JOIN _categorey c ON c._idCat = f._idCat LIMIT 10;"

            connection.query(sql, (err, result, fields) => {

                connection.end();

                if (err) throw err;

                return resolve({ formations: result })

            });

        })

    });

};

exports.OneFormation = ({ nameFormation }) => {

    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT * FROM _formation WHERE _name LIKE '%" + nameFormation + "%';"

            connection.query(sql, (err, result, fields) => {

                connection.end();

                if (err) throw err;

                return resolve({ formation: result })

            });

        })

    });

};


exports.tenFormation = ({ numberFormation }) => {
    console.log(numberFormation)
    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT * FROM _formation WHERE _idF > " + numberFormation + "  LIMIT 10;"

            connection.query(sql, (err, result, fields) => {

                connection.end();

                if (err) throw err;

                return resolve({ formation: result })

            });

        })

    });

};


exports.deleteFormation = ({ id }) => {

    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT COUNT(*) AS count FROM  _formation WHERE _idF = " + id + ""

            connection.query(sql, (err, result, fields) => {

                if (err) throw err;

                if (!Boolean(result[0].count)) return reject({ delete: false })

                const sql = "DELETE  FROM  _formation WHERE _idF = " + id + ""

                connection.query(sql, (err, result, fields) => {

                    connection.end()

                    if (err) throw err;

                    return resolve({ delete: true })

                })

            });

        })

    });

};








