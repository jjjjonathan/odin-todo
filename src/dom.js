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

      const rightInfo = document.createElement("div");
      rightInfo.classList.add("todo-right-info")
      listItem.appendChild(rightInfo)

      if (todo.getDueDate()) {
        const dueDate = document.createElement("span");
        dueDate.classList.add("due-date");
        dueDate.textContent = todo.getDueDate();
        rightInfo.appendChild(dueDate);
      }

      if (todo.getImportantState()) {
        const important = document.createElement("ion-icon");
        important.setAttribute("name", "alert-circle");
        important.classList.add("important");
        rightInfo.appendChild(important);
      }

      todoContainer.appendChild(listItem);
    })
  }

  return {
    renderProjects,
    renderTodos,
  }
})();