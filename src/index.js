import Todo from "./todo.js";
import Project from "./project.js";
import trash from "./trash.js";
import dom from "./dom.js";

const state = (() => {
  // initialize project array, default project, test project, and trash
  const projects = [];
  projects.push(Project("Default Project", []));
  projects.push(Project("Test Project", []));
  projects.push(trash);

  // add example todos
  projects[0].addChild(Todo("Walk the dog", "March 17", "2", true), -1);
  projects[1].addChild(Todo("Walk the frog", "Anytime", "3", false), -1);

  let activeProject = 0;

  const getActiveProjectIndex = () => activeProject;
  const setActiveProject = (newActiveProject) => {
    activeProject = newActiveProject;
  };
  const getActiveProject = () => projects[activeProject];

  const getProjectByIndex = (index) => projects[index];
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

// add example todos
state.getProjectByIndex(1).addChild(Todo("Stalk the log", "March 19", "1", true), -1);

document.addEventListener("DOMContentLoaded", dom.renderAll);
