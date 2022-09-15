import * as axios from "axios";
const host = "http://localhost:3000";
const headers ={
    "Content-Type": "application/json",
}

export async function getUser(userid){
    try {
        const response = await axios.delete(
          host + "/api/users/" + userId + "/userid",
          { headers: headers }
        );
        if (response.data.success) {
          console.log("destroyScore 成功");
        } else {
          console.log("destroyScore エラー: " + response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
};