import projects from "./index.js"

export default (function dom() {
  const renderProjects = (projects) => {
    const projectContainer = document.getElementById("project-container");
    projectContainer.textContent = "";
    
    projects.forEach((project, index) => {
      const listItem = document.createElement("li");
      listItem.dataset.index = index;
      listItem.textContent = project.getTitle();
      listItem.addEventListener("click", handleProjectClick);

      if (project.hasOwnProperty("empty")) {
        listItem.id = "trash";

        const icon = document.createElement("ion-icon");
        icon.setAttribute("name", "trash");
        listItem.appendChild(icon);
      }

      projectContainer.appendChild(listItem)
    })
  }

  const renderTodos = (project) => {
    const todoContainer = document.getElementById("todo-container");
    todoContainer.textContent = "";

    project.getChildren().forEach((todo, index) => {
      const listItem = document.createElement("li");
      listItem.dataset.index = index;
      
      const checkbox = document.createElement("ion-icon")
      checkbox.setAttribute("name", todo.getCheckedState() ? "checkbox-outline" : "square-outline")
      checkbox.classList.add("checkbox");
      listItem.appendChild(checkbox);

      const title = document.createElement("span")
      title.classList.add("todo-title");
      title.textContent = todo.getTitle();
      listItem.appendChild(title)

      const dueDate = document.createElement("span");
      dueDate.classList.add("pill-badge", "due-date");
      dueDate.textContent = todo.getDueDate();
      listItem.appendChild(dueDate);

      const priority = document.createElement("span");
      priority.classList.add("pill-badge", "priority", "priority-" + todo.getPriority());
      listItem.appendChild(priority);

      todoContainer.appendChild(listItem);

      // event handlers


    })
  }

  // click handlers

  const handleProjectClick = (event) => {
    const clickedIndex = event.target.dataset.index;
    renderTodos(projects[clickedIndex]);
  }

  return {
    renderProjects,
    renderTodos,
  }
})();