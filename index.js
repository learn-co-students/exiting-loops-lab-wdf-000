function breakOut(array,changeValue,stopValue) {
  for (var i = 0, len = array.length; i < len; i++) {
    if ( stopValue == array[i] ) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array,changeValue,skipValue) {
  for (var i = 0, len = array.length; i < len; i++) {
    if ( skipValue == array[i] ) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
  
}

function findBy(array,findFn) {
  for (var i = 0, len = array.length; i < len; i++) {
    if ( findFn(array[i]) ) {
      return array[i];
    }
  }
}
