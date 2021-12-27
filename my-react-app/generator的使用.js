//generator:生成器
//1.普通函数
// function foo(){
//   console.log("foo被执行")
// }

// foo()

function* foo() {
  console.log(111);
  yield "hello";
  console.log(222);

  yield "world";
  console.log(333);

  yield "my";
  console.log(444);
}

//iterator:迭代器
//调用一次next,就会消耗一次迭代器
const result = foo();
console.log(result);

const res1 = result.next();
console.log(res1);
const res2 = result.next();
console.log(res2);
const res3 = result.next();
console.log(res3);
const res4 = result.next();
console.log(res4);

//4,生成器函数中代码的执行顺序

//5.练习：定义一个生成器函数，可以生成1-10的数字
function* generateNumber() {
  for (var i = 0; i <= 10; i++) {
    yield i;
  }
}

const numIt = generateNumber();
console.log(numIt.next().value);

//6.generator和promise一起使用

function* bar() {
  const res = yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 3000);
  }).then((res) => {
    console.log(res);
  });

  console.log(res);
}
const it = bar();
it.next().value.then((res) => it.next(res));
