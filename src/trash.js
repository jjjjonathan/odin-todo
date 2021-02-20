import Project from "./project.js";

export default (function trash() {
  const { getTitle, getChildren, addChild, removeChild, shiftChild } = Project(
    "Trash",
    []
  );

  const deleteChild = (indexOfChildToDelete) => {
    // permanently deletes child
    children.splice(indexOfChildToDelete, 1);
  };

  const empty = () => {
    // if you get assignment to constant var error, remove them with a loop instead
    children = [];
  };

  return {
    getTitle,
    getChildren,
    addChild,
    removeChild,
    shiftChild,
    deleteChild,
    empty,
  };
})();
