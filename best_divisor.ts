function isPrime(n: number) {
  let divisor = 2;
  while (n >= 2) {
    if (n % divisor == 0) {
      return false;
    }
    n = n / divisor;
    divisor++;
  }
  return true;
}

function divisorsSet(n: number) {
  const divisors: number[] = [];
  if (isPrime(n)) {
    divisors.push(n);
    return divisors;
  }
  for (let i = 0; i <= n / 2; i++) {
    if (n % i == 0) {
      divisors.push(i);
    }
  }
  divisors.push(n);
  return divisors;
}

function bestDivisor(n: number) {
  const divisors = divisorsSet(n);
  let bestDivisor = divisors[0];
  let bestDivisorSum = 0;
  for (let i = 0; i < divisors.length; i++) {
    let sum = 0;
    let divisor = divisors[i];
    while (divisor > 0) {
      sum += divisor % 10;
      divisor = Math.floor(divisor / 10);
    }
    if (sum > bestDivisorSum) {
      bestDivisor = divisors[i];
      bestDivisorSum = sum;
    }
  }
  return bestDivisor;
}

console.log(bestDivisor(12));
