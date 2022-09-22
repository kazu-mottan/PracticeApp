const express = require('express');
const mysql = require('mysql');
const app = express();
const axios = require('axios')

const PORT = 8080
const HOST = '0.0.0.0'

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'sk',
//   password: 'password',
//   database: 'userdb'
// });

// connection.connect((err)=>{
//   if(err) throw err;
//   console.log('Connected');
// });

// app.get('/sql-data',async(req,res)=>{
//   const sql = 'select * from customers';
//   // con.query()でsql文を実行して結果をresultに格納する
//   await connection.query(sql, (err, result) => {
//     // エラーが発生した場合はエラーメッセージを返す
//     if(err) {
//       return res.status(400).json({"error": err.message})
//     }
//     // エラーが発生しなかった場合はsql文で取得したデータを返す
//     return res.json(result)
//   })
// })
app.listen(8080, HOST, () => {
  console.log(`Listening on port ${PORT}`)
})

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   const sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });