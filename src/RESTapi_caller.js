import axios from "axios"

function Fetch_proj_Mongo(param) {
    return axios({ method: "GET", url: "http://localhost:3000/mongo_projects" });
}

function Fetch_users_Mongo(param) {
    return axios({ method: "GET", url: "http://localhost:3000/mongo_users" });
}

function Post_SignUpMongo(params) {
    let n_user = {
      email: params.email,
      pass: params.pass,
    };

    console.log("User SignUp:", n_user);
    return axios({
      method: "POST",
      url: "http://localhost:3000/SignUP_MongoDB",
      data: n_user,
    });
  }

function loginUser_Mongoo(params) {
    let n_user = {
      email: params.email,
      pass: params.pass,
    };
    console.log("User Login:", n_user);
    return axios({
      method: "POST",
      url: "http://localhost:3000/login",
      data: n_user,
    });
  }

export { Post_SignUpMongo, Fetch_proj_Mongo, Fetch_users_Mongo, loginUser_Mongoo};