const connect = require("../../connectDb/conDB");


exports.allCategories = () => {

    return new Promise((resolve, reject) => {

        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT _idCat , _name FROM _categorey ;"

            connection.query(sql, (err, result, fields) => {

                connection.end();

                if (err) throw err;

                return resolve({ categories: result })

            });

        })

    });

};


exports.addFormation = ({ nameFormation, description, goals, image, idCategory }) => {



    console.log({ nameFormation, description, goals, image, idCategory })


    return new Promise((resolve, reject) => {


        return resolve({ message: typeof goals })


        const connection = connect.conDB()

        connection.connect((err) => {

            if (err) throw err;

            const sql = "SELECT COUNT(*) AS count FROM _formation WHERE _name = '" + nameFormation + "';"

            connection.query(sql, (err, result, fields) => {

                if (err) throw err;

                if (Boolean(result[0].count)) return reject({ message: false })

                const sql = "INSERT INTO _formation (_name, _description , _Goals, _image, _idCat, _dateCreate) VALUES ('" + nameFormation + "','" + description + "','" + global + "','" + image + "','" + (+idCategory) + "', NOW())"

                connection.query(sql, (err, result, fields) => {

                    connection.end();

                    if (err) throw err;

                    if (result.insertId) return resolve({ message: true })

                })

            });

        })

    });

};