import state from "./index.js";
import Todo from "./todo.js";

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

    if (!project.hasOwnProperty("empty")) {
      const newItemLi = document.createElement("li");
      newItemLi.classList.add("new-todo-button");
      newItemLi.id = "new-item-container";

      const icon = document.createElement("ion-icon");
      icon.setAttribute("name", "add-circle");
      icon.classList.add("checkbox");
      newItemLi.appendChild(icon);

      const newItemText = document.createElement("span");
      newItemText.classList.add("todo-title", "new-item-text");
      newItemText.textContent = "New item";
      newItemLi.appendChild(newItemText);

      todoContainer.appendChild(newItemLi);
      newItemLi.addEventListener("click", handleNewItemClick);
    }

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
      title.addEventListener("click", handleTextFieldClick);
      dueDate.addEventListener("click", handleTextFieldClick);
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

  const commitTextField = () => {
    const input = document.querySelector(".todo-text-edit");
    if (input) {
      const newValue = input.value;
      let node = input.parentNode;

      if (node.parentNode.id === "new-item-container") { //if input is for new item
        node = input.parentNode.parentNode;

        state.getActiveProject().addChild(Todo(newValue, "Anytime", "3", false), 0);

        renderTodos();
        //node.addEventListener("click", handleNewItemClick);

      } else { // if input is for editing existing todo title or duedate
        const index = node.dataset.index;
        const currentTodo = state.getActiveProject().getChildren()[index];
  
        if (node.classList.contains("todo-title")) {
          currentTodo.setTitle(newValue);
          node.textContent = currentTodo.getTitle();
        } else if (node.classList.contains("due-date")) {
          currentTodo.setDueDate(newValue);
          node.textContent = currentTodo.getDueDate();
        }

        node.addEventListener("click", handleTextFieldClick);
      }

      document.removeEventListener("click", handleClickToCloseTextField);
      
    }
  };

  // click handlers

  const handleProjectClick = (event) => {
    commitTextField();
    const clickedIndex = event.target.dataset.index;
    state.setActiveProject(clickedIndex);
    renderAll();
  };

  const handleCheckboxClick = (event) => {
    const clickedIndex = event.target.dataset.index;
    const currentTodo = state.getActiveProject().getChildren()[clickedIndex];
    currentTodo.toggleCheckedState();
    
    const node = document.querySelector(
      `.checkbox[data-index="${clickedIndex}"]`
    );
    node.setAttribute(
      "name",
      currentTodo.getCheckedState() ? "checkbox-outline" : "square-outline"
    )
  };

  const handleTextFieldClick = (event) => {
    commitTextField();
    const clickedIndex = event.target.dataset.index;
    const currentTodo = state.getActiveProject().getChildren()[clickedIndex];

    const node = event.target;
    node.textContent = "";

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("todo-text-edit");

    if (node.classList.contains("todo-title")) {
      input.classList.add("todo-title-edit");
      input.value = currentTodo.getTitle();
    } else if (node.classList.contains("due-date")) {
      input.classList.add("due-date-edit");
      input.value = currentTodo.getDueDate();
    }

    node.appendChild(input);
    input.focus();

    node.removeEventListener("click", handleTextFieldClick);
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
      commitTextField();
    }
  };

  const handleNewItemClick = (event) => {
    commitTextField()

    const node = document.querySelector("li#new-item-container")
    node.className = "";

    const span = document.querySelector("li#new-item-container span")
    span.textContent = "";
    span.className = "todo-title";

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("todo-text-edit", "todo-title-edit");
    input.value = "New item";

    span.appendChild(input);
    input.focus();

    node.removeEventListener("click", handleNewItemClick);

    const icon = document.querySelector("li#new-item-container ion-icon")
    icon.addEventListener("click", commitTextField);
  }

  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      const active = document.activeElement.tagName.toLowerCase();
      if (active === "input") {
        commitTextField()
      }
    }
  }

  return {
    renderAll,
    renderTodos,
    handleEnter,
  };
})();
