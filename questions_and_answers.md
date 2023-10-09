<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The code has a typo in "greetign" instead of "greeting".
It initializes a variable "greeting" but assigns an empty object to "greetign".
When you log "greetign," it will output an empty object: "{}".</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The function "sum" takes two parameters, "a" and "b."
When you call "sum(1, '2')," JavaScript implicitly converts "1" to a number and "2" to a string.
The function adds them together using the + operator, resulting in "12" (a string).
So, the output will be the string "12."</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The code defines an array "food" and an object "info" with a property "favoriteFood" initialized to the first element of the "food" array, which is "🍕".
Then, it assigns a new value "🍝" to "info.favoriteFood."
The "food" array remains unchanged, so when you log "food," it will output: ["🍕", "🍫", "🥑", "🍔"].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

<i>The function "sayHi" expects a "name" parameter, but it's called without an argument.
This will result in an error, as "name" is undefined when calling "sayHi()" without providing a value for it.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The code initializes a variable "count" to 0 and an array "nums" with values [0, 1, 2, 3].
It then uses the "forEach" method to iterate over each element in "nums" and increments "count" if the element is truthy (non-zero).
The output will be 3, as there are three truthy values (1, 2, and 3) in the "nums" array.</i>

</p>
</details>
