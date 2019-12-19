// change every eleement until the first occurrence of stopVal
function breakOut(array, changeVal, stopVal) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === stopVal) {
      break;
    }

    array[i] = changeVal;
  }

  return array;
}

// change every element unless element equals skipVal
function keepGoing(array, changeVal, skipVal) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === skipVal) {
      continue;
    }

    array[i] = changeVal;
  }

  return array;
}

// Look for a value in the array, based on the return of findFn
// Return null if value isn't found
function findBy(array, findFn) {
  for (var i = 0, len = array.length; i < len; i++) {
    if ( findFn(array[i]) ) {
      return array[i];
    }
  }

  return null;
}
