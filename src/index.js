import Todo from "./todo.js";
import Project from "./project.js";
import trash from "./trash.js";
import dom from "./dom.js";

// initialize project array and default project
const projects = [];
projects.push(Project("Default Project", []));
projects.push(Project("Test Project", []));
projects.push(trash);

// add example todos
projects[0].addChild(Todo("Walk the dog", "March 17", 2, true), -1)
projects[1].addChild(Todo("Walk the frog", "Anytime", 3, false), -1)
projects[1].addChild(Todo("Stalk the log", "March 19", 1, true), -1)


export default projects;

function onload() {
  dom.renderProjects(projects);
  dom.renderTodos(projects[0]);
}

document.addEventListener("DOMContentLoaded", onload);