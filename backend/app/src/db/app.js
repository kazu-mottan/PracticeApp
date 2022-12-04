const express = require('express');
const mysql = require('mysql2');
const http = require('http');
const axios = require('axios')
const os = require('os');
const cors = require('cors')
const app = express();
const PORT = 8080
const HOST = '0.0.0.0'
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTION"
  );
})

const getLocalAddress=()=> {
  let ifacesObj = {}
  ifacesObj.ipv4 = [];
  ifacesObj.ipv6 = [];
  let interfaces = os.networkInterfaces();

  for (let dev in interfaces) {
      interfaces[dev].forEach(function(details){
          if (!details.internal){
              switch(details.family){
                  case "IPv4":
                      ifacesObj.ipv4.push({name:dev, address:details.address});
                  break;
                  case "IPv6":
                      ifacesObj.ipv6.push({name:dev, address:details.address})
                  break;
              }
          }
      });
  }
  return ifacesObj;
};

const ip = getLocalAddress();

const sleep = (waitSec, callback)=> {
  setTimeout(callback, waitSec);
}

let connection = null;

sleep(20000, function() {
  connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'deetube'
  });
  connection.connect((err)=>{
    if(err) throw err;
    console.log('Connected DB!!');
  });
});


app.get('/sql-data',async(req,res)=>{
  const sql = 'select * from userdb';
  // con.query()でsql文を実行して結果をresultに格納する
  await connection.query(sql, (err, result) => {
    // エラーが発生した場合はエラーメッセージを返す
    if(err) {
      return res.status(400).json({"error": err.message})
    }
    // エラーが発生しなかった場合はsql文で取得したデータを返す
    return res.json(result)
  })
})

app.post('/userregister',async(req,res)=>{
  const name = req.body.name;
  const password = req.body.password;
  const country = req.body.country;
  const lang = req.body.lang;
  const genre = req.body.genre;
  console.log(req.body)
  return res.json(req.body);
  const sql = `INSERT INTO deetube.userdb(username,country,lang,genre) VALUES ('${name}','${password}','${country}','${lang}','${genre}')`;
  // con.query()でsql文を実行して結果をresultに格納する
  // await connection.query(sql, (err, result) => {
  //   // エラーが発生した場合はエラーメッセージを返す
  //   if(err) {
  //     return res.status(400).json({"error": err.message})
  //   }
    
  //   // エラーが発生しなかった場合はsql文で取得したデータを返す
  //   return res.json(result)
    
  // })
})


app.listen(PORT, HOST, () => {
  console.log(`Listening on port ${PORT}`)
  console.log(`Server Running at ${ip.ipv4[0].address}:`);
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