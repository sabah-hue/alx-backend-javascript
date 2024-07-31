export default function getStudentIdsSum(students) {
  const totalIds = students.reduce((total, item) => total + item.id, 0);

  return totalIds;
}
