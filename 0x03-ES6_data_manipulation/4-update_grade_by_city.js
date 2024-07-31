export default function updateStudentGradeByCity(students, city, newGrades) {
  const arr = students.filter((e) => e.location === city);
  console.log(arr);
  return arr.map((e) => {
    const student = newGrades.find((element) => element.id === e.id);
    if (student) return { ...e, grade: student.grade };

    return { ...e, grade: 'N/A' };
  });
}
