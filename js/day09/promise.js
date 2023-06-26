let a = 5;

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    a = a + 1;
    if (a === 6) {
      resolve(a);
    } else {
      reject('error');
    }
  }, 1000);
});

pr.then((res) => {
  console.log(res); // a
  return res + 1;
})
  .then((res) => {
    console.log(res);
  })
  .then(() => {})
  .then(() => {})
  .catch((err) => {
    console.log(err); // "error"
  });
