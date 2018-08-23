module.exports = function(min, max, num, notCyclic) {
  if (num >= min && num <= max) return num;
  if (notCyclic && num < min) return min;
  if (notCyclic && num > max) return max;
  var length = max - min + 1;
  if (num < min) return (num % length) + length;
  return ((num - (max + 1)) % length) + min;
};
