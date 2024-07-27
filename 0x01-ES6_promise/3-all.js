import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then(([photoResult, userResult]) => {
    console.log(photoResult.body, userResult.firstName, userResult.lastName);
  });
}
