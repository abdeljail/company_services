const connect = require("../connectDb/conDB");


exports.allCategories = () => {

    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT *  FROM _categorey LIMIT 10;"

            connection.query(sql, (err, result, fields) => {

                connection.end();

                if (err) throw err;

                return resolve({ categories: result })

            });

        })

    });

};

exports.OneCategory = ({ nameCategory }) => {

    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT * FROM _categorey WHERE _name LIKE '%" + nameCategory + "%';"

            connection.query(sql, (err, result, fields) => {

                connection.end();

                if (err) throw err;

                return resolve({ categories: result })

            });

        })

    });

};


exports.tenCategories = ({ numberCategories }) => {

    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT * FROM _categorey WHERE _idCat > " + numberCategories + "  LIMIT 10;"

            connection.query(sql, (err, result, fields) => {

                connection.end();

                if (err) throw err;

                return resolve({ categories: result })

            });

        })

    });

};


exports.deleteCategory = ({ id }) => {

    return new Promise((resolve, reject) => {






        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT COUNT(*) AS count FROM  _categorey WHERE _idCat = " + id + ""

            connection.query(sql, (err, result, fields) => {

                if (err) throw err;

                if (!Boolean(result[0].count)) return reject({ delete: false })

                const sql = "DELETE  FROM  _categorey WHERE _idCat = " + id + ""

                connection.query(sql, (err, result, fields) => {

                    connection.end()

                    if (err) throw err;

                    return resolve({ delete: true })

                })

            });

        })

    });

};








