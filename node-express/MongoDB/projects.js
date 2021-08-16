const mongoose = require("mongoose");

const project_Schema = mongoose.Schema;

const new_proj_schema = new project_Schema({
    title: { type: String, required: true },
    Description: { type: String, required: false },
    Location: { type: String },
    img_src: { type: String },
});

const Project_model = mongoose.model("projects", new_proj_schema);

module.exports.Project_model = Project_model;