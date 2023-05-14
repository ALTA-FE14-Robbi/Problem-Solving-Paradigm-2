function frog(jumps: number[]): number {
  const n: number = jumps.length;
  const dp: number[] = new Array<number>(n).fill(Infinity);
  dp[0] = 0;
  dp[1] = Math.abs(jumps[1] - jumps[0]);

  for (let i: number = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 1] + Math.abs(jumps[i] - jumps[i - 1]),
      dp[i - 2] + Math.abs(jumps[i] - jumps[i - 2]));
  }

  return dp[n - 1];
}

console.log(frog([10, 30, 40, 20])); // 30
console.log(frog([30, 10, 60, 10, 60, 50])); // 40