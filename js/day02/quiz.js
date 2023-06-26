/*
이름: 여러분들의 성함
국어: 80점
수학: 70점
영어: ..점
탐구: ..점

이 네가지의 점수의 평균을 구하여
90점 이상이면 a학점
80점 이상이면 b학점
70점 이상이면 c학점
그 외 F학점

if문 사용
console.log()
ooo님의 이번학기 성적인 o학점 입니다.
*/

let name = '김임형';
let kor = 80;
let math = 58;
let eng = 90;
let tam = 88;

let avg = (kor + math + eng + tam) / 4;
let grade;

if (avg >= 90) {
  grade = 'A';
} else if (avg >= 80) {
  grade = 'B';
} else if (avg >= 70) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log(`${name}님의 이번학기 성적인 ${grade}학점 입니다.`);

/*
변수가 뭔지 모르는 상태 - > 4주
따라 쳤다는 것 => 따라치면
*/
