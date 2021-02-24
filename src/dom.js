export default (function dom() {
  const renderProjects = (projects) => {
    const projectContainer = document.getElementById("project-container");
    projectContainer.textContent = "";
    
    projects.forEach((project, index) => {
      const listItem = document.createElement("li");
      listItem.dataset.index = index;
      listItem.textContent = project.getTitle();
      projectContainer.appendChild(listItem)
    })
  }

  const renderTodos = (project) => {
    
  }

  return {
    renderProjects,
    renderTodos,
  }
})();