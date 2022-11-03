import * as axios from "axios";
const host = "http://localhost:8080/";
// const headers ={
//     "Content-Type": "application/json",
// }
// export async function registerUser(userid){
export async function registerUser(){
    try {
        const response = await axios.delete(
          host + "/sql-data",
        );
        if (response.data.success) {
          console.log("成功");
          return response.data;
        } else {
          console.log("エラー: " + response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
};