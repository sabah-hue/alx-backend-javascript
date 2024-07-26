import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [];
  const first = new ClassRoom(19);
  const sec = new ClassRoom(20);
  const third = new ClassRoom(34);
  arr.push(first);
  arr.push(sec);
  arr.push(third);
  return arr;
}
