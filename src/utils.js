export function shuffle(array) {
  let counter = array.length;
  console.log('shuffle', array);

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

export function getSizeFormated(size) {
  return size / 1024 > 1024
    ? `${(size / 1024 / 1024).toFixed(2)}M`
    : `${(size / 1024).toFixed(2)}KB`;
}
