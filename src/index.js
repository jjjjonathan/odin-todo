import Todo from "./todo.js";
import Project from "./project.js";
import trash from "./trash.js";
import dom from "./dom.js";

// initialize project array and default project
const projects = [];
projects.push(Project("Default Project", []));
projects.push(Project("Test Project", []));




function onload() {
  dom.renderProjects(projects);
}

document.addEventListener("DOMContentLoaded", onload);