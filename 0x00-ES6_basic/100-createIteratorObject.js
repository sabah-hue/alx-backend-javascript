export default function createIteratorObject(report) {
  const arr = [];
  const allemp = report.allEmployees;
  for (const value of Object.values(allemp)) {
    for (const v of value) {
      arr.push(v);
    }
  }
  return arr;
}
