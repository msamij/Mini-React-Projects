// console.log('Hello, World');
// console.log(this);

// function a() {
//   console.log(this);
// }
// a();

// function b() {
//   const bInner = () => {
//     console.log(this);
//   };

//   bInner();
// }
// b();

class A {
  // constructor() {
  //   console.log(this);
  // }

  aMethod1() {
    console.log(this);
  }

  aMethod2 = () => {
    console.log(this);
  };

  static aMethod3() {
    console.log(this);
  }
}

const aInstance = new A();
aInstance.aMethod1();
aInstance.aMethod2();
console.log(aInstance.__proto__);
// A.aMethod3();

// const obj = {
//   objFunc1: function () {
//     console.log(this);
//     myFuncInner = () => {
//       console.log(this);
//     };
//     myFuncInner();
//   },
// };
// obj.objFunc1();
function aFunc() {}

aFunc.prototype.aMethod1 = function () {
  console.log(this);
};
console.log();
var x = new aFunc();
x.aMethod1();
