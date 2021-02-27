export default function Todo(title, dueDate, priority, isChecked) {
  const getTitle = () => title;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getCheckedState = () => isChecked;

  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const setDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };
  const togglePriority = () => {
    if (priority === "3") {
      priority = "2";
    } else if (priority === "2") {
      priority = "1";
    } else if (priority === "1") {
      priority = "3";
    }
  };
  const toggleCheckedState = () => {
    isChecked = isChecked ? false : true;
  };

  return {
    getTitle,
    getDueDate,
    getPriority,
    getCheckedState,
    setTitle,
    setDueDate,
    togglePriority,
    toggleCheckedState,
  };
}
