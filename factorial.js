function factorial(num){
  if (num < 0) return "Factorials can't be negative"
  n = 1;
  while (num > 0){
    n = n * num;
    num = (num - 1);
  }
  return n
}
module.exports = factorial;
