export default function createEmployeesObject(departmentName, employees) {
  const emp = [...employees];
  return {
    [`${departmentName}`]: emp,
  };
}
