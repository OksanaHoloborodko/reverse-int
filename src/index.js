module.exports = function reverse (n) {
    let rev = parseInt(Math.abs(n).toString().split('').reverse().join(''));
    return rev;
}
