const mysql = require('mysql2');
function conexionf(){
    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '10905460Lp',
        database: 'tiendademascotassinsajoazul'
    });
con.connect((err) => {
    if (err){
        throw err;
    }else{
        console.log("Connexion exitosa");
    }
});
return con;
}
module.exports={conexionf}
