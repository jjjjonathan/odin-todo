export default function Todo(title, description, dueDate, isImportant, isChecked) {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getImportantState = () => isImportant;
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
  const toggleImportantState = () => {
    isImportant = isImportant ? false : true;
  };
  const toggleCheckedState = () => {
    isChecked = isChecked ? false : true;
  }

  return {
    getTitle,
    getDescription,
    getDueDate,
    getImportantState,
    getCheckedState,
    setTitle,
    setDescription,
    setDueDate,
    toggleImportantState,
    toggleCheckedState,
  };
}
