const bracketsLookup = {
  '}': '{',
  ']': '[',
  ')': '(',
};

function balancedStringCheck(input) {
  const brackets = [];
  for (const s of input) {
    if (bracketsLookup[s] && brackets[brackets.length - 1] === bracketsLookup[s]) {
      brackets.pop();
    } else {
      brackets.push(s);
    }
  }
  return brackets.length === 0;
}

console.log(balancedStringCheck('{[()]}')); // true
console.log(balancedStringCheck('{[()]}[()]{}')); // true
console.log(balancedStringCheck('{]')); // false