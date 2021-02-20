export default function Project(title, children) {
  // children is an array of todo objects
  const getTitle = () => title;
  const getChildren = () => children;

  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const addChild = (newChild, index) => {
    // if index is -1, append child to end, else insert child at index
    if (index === -1) {
      children.push(newChild);
    } else {
      children.splice(index, 0, newChild);
    }
  };
  const removeChild = (indexOfChildToRemove) => {
    // removes child and returns it
    const returnedChildArray = children.splice(indexOfChildToRemove, 1);
    return returnedChildArray[0];
  };
  const shiftChild = (startIndex, endIndex) => {
    addChild(removeChild(startIndex), endIndex);
  };

  return {
    getTitle,
    getChildren,
    setTitle,
    addChild,
    removeChild,
    shiftChild,
  };
}
