import Todo from "./todo.js";
import Project from "./project.js";
import trash from "./trash.js";
import dom from "./dom.js";

// initialize project array and default project
const projects = [];
projects.push(Project("Default Project", []));
projects.push(Project("Test Project", []));

// add example todo in Default Project
projects[0].addChild(Todo("Walk the dog", "Don't forget to bring a poop bag", "March 17", false, false), -1)




function onload() {
  dom.renderProjects(projects);
  dom.renderTodos(projects[0]);
}

document.addEventListener("DOMContentLoaded", onload);