import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photoResult, userResult] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);
    console.log(photoResult.body, userResult.firstName, userResult.lastName);
  } catch (error) {
    console.error('Error during profile signup:', error);
  }
}

// export default function handleProfileSignup() {
//   return Promise.all([uploadPhoto(), createUser()]).then(([photoResult, userResult]) => {
  // console.log(photoResult.body, userResult.firstName, userResult.lastName);
  //   })
// }
