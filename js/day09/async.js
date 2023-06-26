const callback = (number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      number = number + 1;
      if (number < 5) return resolve(number);
      reject('err');
    }, 3000);
  });

const asyncAddNumber = async (number) => {
  /**
   * try{
   *  ... 샐패할 수도 있는 (에러가 날 수도 있는 실행문)
   * } catch (err) {
   *  ... 에러처리
   *  console.error(err)
   * }
   */

  try {
    const result = await callback(number);
    console.log(result); // 4
    throw new Error(result);
    // 나 여기서 에러 해결못하기 때문에 상위 에러 처리 시스템으로 넘기는 것

    const result2 = await callback(result);
    console.log(result2);
  } catch (err) {
    console.log(err, 123);
    throw
  }
};

// async function asyncAddNumber(number) {}

asyncAddNumber(3);
