export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    //   array = [...array.map(value => appendString + value) ];
    const i = array.indexOf(value);
    array[i] = appendString + value; // eslint-disable-line
  }

  return array;
}
