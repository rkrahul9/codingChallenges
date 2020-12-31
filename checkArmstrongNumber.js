function checkArmstrongNumber(num) {
  let sum = 0;
  for (const n of num.toString()) {
    sum += Math.pow(Number(n), 3);
  }
  return sum === num;
}

console.log(checkArmstrongNumber(153)); // true
console.log(checkArmstrongNumber(123)); // false