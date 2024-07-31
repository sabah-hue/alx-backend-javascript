export default function updateStudentGradeByCity(students, city, newGrades) {
  const arr = students.filter((e) => e.location === city);
  return arr.map((e) => {
    const student = newGrades.find((element) => element.studentId === e.id);
    if (student) {
      if (student.grade) return { ...e, grade: student.grade };
    }
    return { ...e, grade: 'N/A' };
  });
}
