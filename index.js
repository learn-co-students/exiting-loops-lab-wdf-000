function breakOut(array, changeValue, stopValue) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
      return array;
      break;
    }
    array[i] = changeValue;
  }
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i];
      break;
    } 
  }
}
