// 纯函数:
// 1.固定的输入产生固定的输出
// 2.没有产生副作用，就是对输入的变量没有进行修改

//是否是一个纯函数?是
function sum(num1, num2) {
  return num1 + num2;
}

sum(20, 30);

//add是不是一个纯函数？不是
let foo = 10;
function add(num) {
  return foo + num;
}

add(5);
foo = 20;
add(5);

//能否将上面函数改写成纯函数?
//此时bar是常量，不能被修改
const bar = 10;
function add2(num) {
  return bar + num;
}

//add3不是纯函数，因为baz能被修改。所以要看函数内中的内容在程序运行时是否会有变化，会影响函数返回的结果？
const baz = { count: 10 };
function add3(num) {
  return baz.count + num;
}
add3(10);
baz.count = 20;
add3(10);

//printInfo是否是纯函数?不是，因为改变的info
function printInfo(info) {
  info.name = "why22";
  console.log(info.name, info.age);
}
const obj = { name: "why", age: 10 };
printInfo(obj);
console.log(obj);
