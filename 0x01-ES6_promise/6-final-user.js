import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((res) => {
      const result = [];
      res.forEach((element) => {
        if (element.status === 'fulfilled') {
          result.push({ status: element.status, value: element.value });
        } else {
          result.push({ status: element.status, value: `${element.reason}` });
        }
      });
      return result;
    });
}
