export const useSort = (arr) => {
  // Check if arr is an array and has elements
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Invalid input: You must provide a non-empty array.");
  }

  // Create a shallow copy of the input array
  const sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length - 1; i++) {
    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[j].hoursSpent > sortedArr[i].hoursSpent) {
        // Swap elements in the copied array
        const temp = sortedArr[i];
        sortedArr[i] = sortedArr[j];
        sortedArr[j] = temp;
      }
    }
  }

  return sortedArr;
};
