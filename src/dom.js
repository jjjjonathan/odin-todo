import state from "./index.js";

export default (function dom() {
  const renderProjects = (projects, activeProjectIndex) => {
    const projectContainer = document.getElementById("project-container");
    projectContainer.textContent = "";

    projects.forEach((project, index) => {
      const listItem = document.createElement("li");
      listItem.dataset.index = index;
      listItem.textContent = project.getTitle();

      if (project.hasOwnProperty("empty")) {
        listItem.id = "trash";

        const icon = document.createElement("ion-icon");
        icon.setAttribute("name", "trash");
        listItem.appendChild(icon);
      }

      if (index == activeProjectIndex) {
        listItem.classList.add("active-project");
      }

      listItem.addEventListener("click", handleProjectClick);
      projectContainer.appendChild(listItem);
    });
  };

  const renderTodosByProject = (project) => {
    const todoContainer = document.getElementById("todo-container");
    todoContainer.textContent = "";

    project.getChildren().forEach((todo, index) => {
      const listItem = document.createElement("li");
      listItem.dataset.index = index;

      const checkbox = document.createElement("ion-icon");
      checkbox.setAttribute(
        "name",
        todo.getCheckedState() ? "checkbox-outline" : "square-outline"
      );
      checkbox.classList.add("checkbox");
      checkbox.dataset.index = index;
      listItem.appendChild(checkbox);

      const title = document.createElement("span");
      title.classList.add("todo-title");
      title.textContent = todo.getTitle();
      title.dataset.index = index;
      listItem.appendChild(title);

      const dueDate = document.createElement("span");
      dueDate.classList.add("pill-badge", "due-date");
      dueDate.textContent = todo.getDueDate();
      dueDate.dataset.index = index;
      listItem.appendChild(dueDate);

      const priority = document.createElement("span");
      priority.classList.add(
        "pill-badge",
        "priority",
        "priority-" + todo.getPriority()
      );
      priority.dataset.index = index;
      listItem.appendChild(priority);

      todoContainer.appendChild(listItem);

      // event listeners
      checkbox.addEventListener("click", handleCheckboxClick);
      priority.addEventListener("click", handlePriorityClick);
    });
  };

  const renderTodos = () => {
    renderTodosByProject(state.getActiveProject());
  };

  const renderAll = () => {
    renderProjects(state.getProjectArray(), state.getActiveProjectIndex());
    renderTodos();
  };

  // click handlers

  const handleProjectClick = (event) => {
    const clickedIndex = event.target.dataset.index;
    state.setActiveProject(clickedIndex);
    renderAll();
  };

  const handleCheckboxClick = (event) => {
    const clickedIndex = event.target.dataset.index;
    const currentTodo = state.getActiveProject().getChildren()[clickedIndex];
    currentTodo.toggleCheckedState();
    renderTodos();
  };

  const handlePriorityClick = (event) => {
    const clickedIndex = event.target.dataset.index;
    const currentTodo = state.getActiveProject().getChildren()[clickedIndex];
    currentTodo.togglePriority();
    renderTodos();
  };

  return {
    renderAll,
    renderTodos,
  };
})();
