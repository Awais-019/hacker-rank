function isPrime(n) {
    var divisor = 2;
    while (n >= 2) {
        if (n % divisor == 0) {
            return false;
        }
        n = n / divisor;
        divisor++;
    }
    return true;
}
function divisorsSet(n) {
    var divisors = [];
    if (isPrime(n)) {
        divisors.push(n);
        return divisors;
    }
    for (var i = 0; i <= n / 2; i++) {
        if (n % i == 0) {
            divisors.push(i);
        }
    }
    divisors.push(n);
    return divisors;
}
function bestDivisor(n) {
    var divisors = divisorsSet(n);
    var bestDivisor = divisors[0];
    var bestDivisorSum = 0;
    for (var i = 0; i < divisors.length; i++) {
        var sum = 0;
        var divisor = divisors[i];
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
