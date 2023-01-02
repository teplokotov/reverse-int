module.exports = function reverse (n) {
    const str = Math.abs(n).toString();
    let i = 1;
    let result = '';
    while (i <= str.length) {
      result = result + str[str.length-i];
      i++;
    }
    return result;
}
