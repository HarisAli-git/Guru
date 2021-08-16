const { response } = require("express");
const expressModule = require("express");
const app = expressModule();
var bodyParser = require("body-parser");

const cors = require("cors");
app.use(cors());

app.use(expressModule.json());
app.use(expressModule.urlencoded({
    extended: true,
}));
app.options("/addproject", cors());
app.options("/addproject_MongoDB", cors());
app.options("/SignUP_MongoDB", cors());

const mongoose = require('mongoose');
const projects_collection = require("./MongoDB/projects");
const users_collection = require("./MongoDB/users");
const project_model = projects_collection.Project_model;
const user_model = users_collection.User_model;

mongoose.connect(
    "mongodb+srv://dbadmin:username@Clustername.j8ef7.mongodb.net/Guru?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true }
).then(() => { console.log("Successfully Connected! to DB") }).catch((error) => { console.log(error); });


let users_list = [];

app.get("/", (req, res) => {
    console.log("/projects page accessed");
    res.header("Access-Control-Allow-Origin", "*")

    project_model.find().then((result) => {
        console.log(result);
        res.send(result);
    });
});

app.get("/mongo_projects", (request, response) => {
    console.log("/Mongo_get_projects page accessed");
    response.header("Access-Control-Allow-Origin", "*")
    project_model.find().then((result) => {
        console.log(result);
        response.send(result);
    });
});


app.get("/mongo_users", (request, response) => {
    console.log("/Mongo_get_users page accessed");
    response.header("Access-Control-Allow-Origin", "*")
    user_model.find().then((result) => {
        console.log(result);
        response.send(result);
    });
});

app.post("/addproject_MongoDB", (res, req) => {
    console.log("/projects post mongoDB method accessed");
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*")

    const new_project_mongo = new project_model({
        title: req.body.project_title,
        description: req.body.project_desc,
        location: req.body.project_loc,
        img_src: req.body.project_src,
    });

    new_project_mongo.save().then((result) => {
        res.send("Successfully created new project in the MongoDB!\n", result);
    }).catch((error) => {
        console.log(error);
    });
});

app.post("/SignUP_MongoDB", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const new_user = new user_model({
      email: req.body.email,
      pass: req.body.pass,
    });

    console.log(new_user);

    new_user.save();
  
    const reply = { message: "Successfully Registered" };
    res.send(reply);
  });
  
app.post("/login", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const new_user = new user_model({
      email: req.body.email,
      pass: req.body.pass,
    });

    console.log(new_user);
  
    user_model.find().then((results) => {
      users_list = results;
      let validUser = false;
  
      users_list.forEach((element) => {
        if (
          element.email === new_user.email && element.pass === new_user.pass
        ) {
          validUser = true;
        }
      });
      if (validUser == true) {
        res.send({ message: "Successfully Logged in", success: true });
      } else {
        res.send({ message: "UnSuccessfully Logged in", success: false });
      }
    });
  });
  

app.listen(3000, () => {
    console.log("Server started: Listening at port 3000");
});
