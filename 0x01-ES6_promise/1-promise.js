export default function getFullResponseFromAPI(success) {
  return new Promise((res, err) => {
    if (success) {
      res({
        status: 200,
        body: 'Success',
      });
    } else {
      err(new Error('The fake API is not working currently'));
    }
  });
}
