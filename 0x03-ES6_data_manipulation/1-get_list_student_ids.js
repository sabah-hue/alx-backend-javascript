export default function getListStudents(arg) {
  if (arg instanceof Array) {
    return arg.map((e) => e.id);
  }
  return [];
}
