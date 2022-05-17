const mysql = require('mysql')


exports.conDB = () => {
    
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456789',
        database: 'company_serveces'
      })
} 
