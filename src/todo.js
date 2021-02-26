export default function Todo(title, dueDate, isImportant, isChecked) {
  const getTitle = () => title;
  const getDueDate = () => dueDate;
  const getImportantState = () => isImportant;
  const getCheckedState = () => isChecked;

  const setTitle = (newTitle) => {
    title = newTitle;
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
    getDueDate,
    getImportantState,
    getCheckedState,
    setTitle,
    setDueDate,
    toggleImportantState,
    toggleCheckedState,
  };
}
