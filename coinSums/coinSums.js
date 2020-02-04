/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p
2p
5p
10p
20p
50p
£1 (100p)
£2 (200p)

Given a given number of pence, return the possible number of ways someone could make change.
It is possible to make 5 pence in the following ways:
5 * 1p
3 * 1p + 1 * 2p
1 * 1p + 2 * 2p
1 * 5p
In other words, find all the possible combinations of coins that sum to a given pence value.
*/

// HELPERS
var coins = [1, 2, 5, 10, 20, 50, 100, 200];

function coinSums(total) {
  var sums = 0;

  function recurse(index, leftover) {
    var current = coins[index];

    if (index === 0) {
      if (leftover % current === 0) {
        sums++;
      }
      return;
    }
    while (leftover >= 0) {
      recurse(index - 1, leftover);
      leftover -= current;
    }
  }
  recurse(coins.length - 1, total);
  return sums;
}
console.log(coinSums(5));
