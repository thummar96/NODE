const mysql = require('mysql');

const connection = () =>{    
  return  mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "admin@123",
    database: "kinjal",
    port: 3306,
    insecureAuth : true
});

}


module.exports = connection();