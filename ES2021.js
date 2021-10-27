// 1. replaceAll
const str = "[Nagoya Station] -> [Sakae]";

console.log(str.replaceAll("[", "#").replaceAll("]", "#"));
console.log(str.replace(/\[/g, "#").replace(/\[/g, "#"));

// 2. Promise Any
const resPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("success");
  }, 2000);
});
const rejPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("fail");
  }, 1000);
});

Promise.race([resPromise, rejPromise])
  .then(() => console.log("success"))
  .catch((e) => console.log(e));

Promise.any([resPromise, rejPromise])
  .then(() => console.log("success"))
  .catch((e) => console.log(e));

// 3. Logical assignment Operators
function add(num1, num2) {
  num1 = num1 || 0;
  num2 ||= 0;
  console.log(num1 + num2);
}
add();

// 4. Numeric separators
let billion = 1_000_000_000;
console.log(billion);

// 5. WeakRef (Weak Reference)
let user = { name: "Yamamoto", age: 20 };
const weakUser = new WeakRef(user);

user = null;

const timer = setInterval(() => {
  const wUser = weakUser.deref();
  if (wUser) {
    console.log(weakUser.name);
  } else {
    console.log("deleted");
    clearInterval(timer);
  }
}, 1000);
timer();
