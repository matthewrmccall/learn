// Props are Read-Only
// Pure sum function (doesn't change it's inputs)
function sum(a, b) {
  return a + b;
}
// Impure function (changes it's own input)
function withdraw(account, amount) {
  account.total -= amount;
}
