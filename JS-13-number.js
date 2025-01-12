/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:

function generateSequence() {
  let num1 = Math.floor(Math.random() * 16);
  let num2 = Math.floor(Math.random() * 16);

  let sequence = [num1, num2];

  for (let i = 2; i < 10; i++) {
    let nextNum = (sequence[i - 1] + sequence[i - 2]) * 2;
    sequence.push(nextNum);
  }

  return sequence;
}

console.log(generateSequence());
