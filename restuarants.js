function restaurant(l, b) {
    var max = Math.max(l, b);
    var min = Math.min(l, b);
    var gcd = 1;
    for (var i = 1; i <= min; i++) {
        if (max % i == 0 && min % i == 0) {
            gcd = i;
        }
    }
    return (l * b) / (gcd * gcd);
}
console.log(restaurant(6, 9));
