export default function handleResponseFromAPI(promise) {
  return new Promise((res, err) => {
    if (promise) {
      res({
        status: 200,
        body: 'Success',
      });
      console.log('Got a response from the API');
    } else {
      err(new Error(''));
    }
  });
}
