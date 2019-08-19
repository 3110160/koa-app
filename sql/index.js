const mysql = require('mysql');
import {database} from '../config';

const connection = mysql.createConnection({
    host     : database.HOST,
    user     : database.USERNAME,
    password : database.PASSWORD,
    database : database.DATABASE,
    port     : database.PORT
});

//todo 数据库操作
const query = (sql,values) =>{
    return new Promise((resolve,reject)=>{
        connection.query(sql,values,(err,rows)=>{
            if(err){
                reject(err);
            }else {
                resolve(rows)
            }
            connection.end();
        });
    });
};


export {
    query,
}