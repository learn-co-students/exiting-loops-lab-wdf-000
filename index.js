function breakOut(array, changeValue, stopValue) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === stopValue) {
      break
    } else {
      array[i] = changeValue
    }
  } 
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === skipValue) {
      continue
    } else {
      array[i] = changeValue
    }
  } 
  return array;
}

function findBy(array, findFn) {
  var tmp = null
  for (var i = 0, len = array.length; i < len; i++) {
    if (findFn(array[i])) {
      tmp = array[i];
    }
  } 
  return tmp;
}
