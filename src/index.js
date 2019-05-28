function hello(name) {
  return `Hello ${name}`;
}

const result = hello("velopert");
console.log(result);

// 화살표 함수

const hello2 = name2 => {
  console.log(`Hello, ${name2}`);
};

hello2("bye");

const add = (a, b) => {
  return a + b;
};

const add2 = (a, b) => a + b;

const sum2 = add(1, 2);
console.log(sum2);

const sum = add(1, 2);
console.log(sum);

// 객체
