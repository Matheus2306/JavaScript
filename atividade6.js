var diagonal = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];

for (let i = 0; i < diagonal.length; i++) {
  for (let b = 0; b < diagonal[0].length; b++) {
    if (i == b) {
      console.log(`A diagonal principal é: ${diagonal[i][b]}`);
    }
  }
}
  