import Todo from "./todo.js";
import Project from "./project.js";
import trash from "./trash.js";
import dom from "./dom.js";

const state = (() => {
  // initialize project array, default project, and trash
  const projects = [];
  projects.push(Project("Todos", []));
  projects.push(trash);

  // add example todos
  projects[0].addChild(Todo("Walk the dog", "March 17", "3", false), -1);
  projects[0].addChild(Todo("Plant a tree", "April 3", "2", false), -1);
  projects[0].addChild(Todo("End world hunger", "Anytime", "1", false), -1);

  let activeProject = 0;

  const getActiveProjectIndex = () => activeProject;
  const setActiveProject = (newActiveProject) => {
    activeProject = newActiveProject;
  };
  const getActiveProject = () => projects[activeProject];

  const getProjectByIndex = (index) => {
    // use index of -1 to get final project (Trash)
    if (index >= 0) {
      return projects[index];
    } else if (index == -1) {
      return projects[projects.length - 1];
    }
  };

  const getProjectArray = () => projects;

  return {
    getActiveProjectIndex,
    setActiveProject,
    getActiveProject,
    getProjectByIndex,
    getProjectArray,
  };
})();

export default state;

function onload() {
  dom.renderAll();
  document.addEventListener("keyup", dom.handleEnter);
}

document.addEventListener("DOMContentLoaded", onload);
