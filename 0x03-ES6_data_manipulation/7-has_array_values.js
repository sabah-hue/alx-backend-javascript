export default function hasValuesFromArray(setValue, arr) {
  return arr.every((e) => setValue.has(e));
}
