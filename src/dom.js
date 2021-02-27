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
      listItem.classList.add("escape");

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
      title.addEventListener("click", handleTitleClick);
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

  const handleTitleClick = (event) => {
    const clickedIndex = event.target.dataset.index;
    const currentTodo = state.getActiveProject().getChildren()[clickedIndex];

    const node = event.target;
    node.textContent = "";

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("todo-title-edit", "todo-text-edit");
    input.value = currentTodo.getTitle();

    node.appendChild(input);
    input.focus();

    node.removeEventListener("click", handleTitleClick);
    document.addEventListener("click", handleClickToCloseTextField);
  };

  const handlePriorityClick = (event) => {
    const clickedIndex = event.target.dataset.index;
    const currentTodo = state.getActiveProject().getChildren()[clickedIndex];
    currentTodo.togglePriority();

    const node = document.querySelector(
      `.priority[data-index="${clickedIndex}"]`
    );
    node.className = "";
    node.classList.add(
      "pill-badge",
      "priority",
      "priority-" + currentTodo.getPriority()
    );
  };

  const handleClickToCloseTextField = (event) => {
    if (event.target.classList.contains("escape")) {
      const textField = document.querySelector(".todo-text-edit");
      const newValue = textField.value;
      const titleSpan = textField.parentNode;
      const textFieldIndex = titleSpan.dataset.index;
      const currentTodo = state.getActiveProject().getChildren()[
        textFieldIndex
      ];
      
      currentTodo.setTitle(newValue);

      titleSpan.textContent = currentTodo.getTitle();

      document.removeEventListener("click", handleClickToCloseTextField);
      titleSpan.addEventListener("click", handleTitleClick);
    }
  };

  return {
    renderAll,
    renderTodos,
  };
})();
