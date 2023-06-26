/**
 * 자판기라는 함수를 정의
 * 자판기 함수는 처음에 실행되었을 때 '자판기가 가동되었습니다' console
 * 매개변수로는 coin과 메뉴이름
 *
 * 리턴 값은
 * 잔돈이 0원이면 음료수 이름을 리턴
 * 잔돈이 있으면 음료수 이름과 잔돈을 리턴
 *
 * 선택한 음료수의 값이 coin보다 클 경우
 * console 금액이 부족합니다.
 *
 * 메뉴
 *
 * 솔의눈 300원
 * 비타500 500원
 * 콜라 1000원
 *
 * 없는 메뉴를 선택하면 존재하지 않는 상품입니다.(선택)
 */

let err = {
  100: () => {
    console.log('금액이 부족합니다');
  },
  101: () => {
    console.log('금액을 잘못 투입하셨습니다');
  },
  102: () => {
    console.log('존재하지 않는 상품입니다');
  },
};

function changes(coin, pirce) {
  return coin - pirce;
}

function result(product, change) {
  console.log(`주문하신 ${product}이/가 나왔습니다. 잔돈은 ${change}원 입니다`);
}

function 자판기(coin, product) {
  let change;
  let menu = { 솔의눈: 300, 비타500: 500, 콜라: 1000 };
  let productPrice = menu[product]; // 300 => 여러분이 선택한 product의 가격 menu['콜라'] = 100

  // 예외 처리
  if (coin < 300) return err[101](); // 금액 잘못 투입
  if (!productPrice) return err[102](); // 없는 메뉴 고른 것
  if (coin < productPrice) return err[100](); // 금액 부족

  change = changes(coin, productPrice); // 잔돈 변환
  if (change === 0) return console.log(product); // 결과 2가지 1. 잔돈이 0원일 때, 2. 잔돈이 0원이 아닐때
  return result(product, change);
}

자판기(1000, '솔의눈');
// coin, product(내가 선택한)
