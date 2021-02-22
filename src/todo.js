export default function Todo(title, description, dueDate, priority, isChecked) {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getCheckedState = () => isChecked;

  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const setDescription = (newDescription) => {
    description = newDescription;
  };
  const setDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };
  const setPriority = (newPriority) => {
    priority = newPriority;
  };
  const toggleCheckedState = () => {
    isChecked = isChecked ? false : true;
  }

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getCheckedState,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    toggleCheckedState,
  };
}
