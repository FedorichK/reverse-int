module.exports = function reverse (n) {
    let nAbs = Math.abs(n);
    let nReverse = nAbs.toString().split('').reverse().join('');
  return nReverse;
}
