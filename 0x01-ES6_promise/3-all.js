import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const data = Promise.all([uploadPhoto(), createUser()]).then((res) => {
    // console.log(`${photoResult}.body, ${userResult}.firstName, ${userResult}.lastName`);
    console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
  }).catch(() => console.log('Signup system offline'));
  return data;
}
