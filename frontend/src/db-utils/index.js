import * as axios from "axios";
const host = "http://localhost:8080/";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// const headers ={
//     "Content-Type": "application/json",
// }
// export async function registerUser(userid){
export async function registerUser(userinfo){
  try {
    const response = await axios.post(
      host + "/userinput",userinfo,
    );
    if (response.data.success) {
      console.log("register 成功");
    } else {
      console.log("register エラー: ");
    }
    return response;
  } catch (err) {
    console.log(err);
  }
}