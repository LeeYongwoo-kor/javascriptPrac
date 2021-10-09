// 1. Nullish coalescing operator(??)
// -> undefind, null인 경우 오른쪽코드가 실행됨
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = "Nothing to display";
  }
  console.log(message);
}

// Good code
function printMessageForGood(text) {
  const message = text ?? "Nothing to display";
  const message2 = text || "Nothing to display(2)";
  // Logical OR operator
  // -> 왼쪽코드가 false인 경우 오른쪽코드가 실행됨
  // undefined, null, 0, -0, false, NaN, "", '', `` -> false
  console.log(message);
  console.log(message2);
}

// default parameter는 undefined인 경우에만 적용된다. null을 적용한 경우 null이 출력됨
printMessageForGood("Hello");
printMessageForGood(undefined);
printMessageForGood(null);

// 2. Object-destructuring
const person = {
  name: "Yong",
  age: 99,
  phone: "01088889999",
};

// Bad Code
function displayPerson(person) {
  const name = person.name;
  const age = person.age;
  console.log(name, age);
}

// Good Code
function displayPersonForGood(person) {
  const { name, age } = person;
  console.log(name, age);
}

// 3. Spread Syntax - Object
const item = { type: "shirts", size: "M" };
const detail = { price: 2900, made: "Colombia", gender: "M" };

// Bad Code
item["price"] = detail.price;
// -> 존재하는 오브젝트를 수동적으로 업데이트(리테이션)하는 것은 좋지않다.

// Bad Code
const newObject = new Object();
newObject["price"] = detail.price;

// Bad Code
const newObject2 = {
  price: detail.price,
};

// Good Code
const shirt0 = Object.assign(item, detail);

// Better Code
const shirt1 = { ...item, ...detail, price: 3900 };

// 4. Obtional Chaining
const lee = {
  name: "lee",
  age: 99,
};
const aoi = {
  name: "aoi",
  age: 20,
  job: {
    title: "Software Engineer",
  },
};

// Bad Code
function displayJobTitle(person) {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}
displayJobTitle(aoi);

// Good Code
function displayJobTitleForGood(person) {
  const title = person.job?.title ?? "No Job Yet";
  console.log(title);
}
displayJobTitleForGood(lee);
displayJobTitleForGood(aoi);

// TIP: 배열에서 중복제거한 새로운 배열 생성
const array = [1, 2, 3, 4, 1, 2, 3, 5];
console.log([...new Set(array)]);

// 5. Promise -> Async / await

// Bad Code
function displayUser() {
  fetchUser().then((user) => {
    fetchProfile(user).then((profile) => {
      updateUI(user, profile);
    });
  });
}

// Bad Code --> Good Code
async function displayUserForGood() {
  const user = await fetchUser();
  const profile = await fetchProfile(user);
  updateUI(user, profile);
}
