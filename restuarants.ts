function restaurant(l: number, b: number): number {
  let max = Math.max(l, b);
  let min = Math.min(l, b);
  let gcd = 1;
  for (let i = 1; i <= min; i++) {
    if (max % i == 0 && min % i == 0) {
      gcd = i;
    }
  }
  return (l * b) / (gcd * gcd);
}

console.log(restaurant(6, 9));