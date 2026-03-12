// var getTriangle = function (base, height) {
//   return (base * height) / 2;
// };

// console.log('삼각형의 면적 :' + getTriangle(5, 2));

// 화살표 함수
let getTriangle = (base, height) => {
  return (base * height) / 2;
  // 추가 코드 작성을 위해서는 {}사용
};

console.log(`삼각형의 면적 : ${getTriangle(5, 2)}`);

//
const person = {
  name: 'Kim',

  // 일반 함수
  hello1: function () {
    console.log(`일반 함수: ${this}`, this);
  },

  // 화살표 함수
  hello2: () => {
    console.log(`화살표 함수: ${this}`, this);
  },
};

person.hello1();
person.hello2();

// 출력 결과
// 일반 함수: [object Object] { name: 'Kim', hello1: [Function: hello1], hello2: [Function: hello2] }
// 화살표 함수: [object Object] {}
