const inp1 = [1, 4, 1, 3, 1];

const inp2 = [1, 4, 1, 3];

function optimalBreakTime(input) {
  
  let sumFromFront = 0;
  let sumFromBack = 0;
  let finalSumFromBack = 0;
  
  for (let i = 0, j = input.length; i < input.length; i++, j--) {

    if (i === j) return null;

    sumFromFront += input[i];
    sumFromBack += input[j - 1];
    finalSumFromBack = input.slice(i + 1, j - 1).reduce((acc, cv) => acc + cv, 0) + sumFromBack;

    if (sumFromFront === finalSumFromBack) return i;

  }
}

console.log(optimalBreakTime(inp1)); // 1
console.log(optimalBreakTime(inp2)); // null