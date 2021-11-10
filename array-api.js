class Students {
  constructor(grade, age, enrolled, score) {
    this.grade = grade;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Students("A", 29, true, 45),
  new Students("B", 28, false, 80),
  new Students("C", 30, true, 90),
  new Students("D", 40, false, 66),
  new Students("E", 18, true, 88),
];

// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  console.log(result);
  // > apple,banana,orange
}

// Q2. make an array out of a string
{
  const fruits = "apple, kiwi, banana, cherry";
  const result = fruits.split(",");
  console.log(result);
  // > {"apple", "kiwi", "banana", "cherry"}
}

// Q3. make this array look like this: {5, 4, 3, 2, 1}
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  // > {5, 4, 3, 2, 1}
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  // > {3, 4, 5}
}

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => students.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be : [45, 80, 90, 66, 88]
{
  const result = students.map((student) => students.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores result should be: '45, 80, 90,
// 66, 88'
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order result should be: '45, 66, 80, 88,
// 90'
{
  const result = students
    .map((student) => students.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
