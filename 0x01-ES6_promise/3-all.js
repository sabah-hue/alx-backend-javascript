import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const data = Promise.all([uploadPhoto(), createUser()]).then(([photoResult, userResult]) => {
    console.log(photoResult.body, userResult.firstName, userResult.lastName);
  }).catch(() => console.log('error during signup'));
  return data;
}
