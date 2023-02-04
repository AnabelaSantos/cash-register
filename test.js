function cashRegister(price, cash, cid) {
  let cidTotal = 0;
  //   for (let i in cid) {
  //     for (let j in cid[i]) {
  //       cidTotal += cid[i][j];
  //       console.log(cidTotal);
  //     }
  //   }
  //   for (let i in cid) {
  //     cidTotal += cid[i][1];
  //     cidTotal = parseFloat(cidTotal.toFixed(2));
  //   }
  //   console.log(cidTotal);
  // }
  let changeDue = cash - price;
  let change = [];
  for (let i in cid.reverse()) {
    // changeDue = changeDue % cid[i][1];
    if (changeDue % cid[i][1] === 0) {
      return change.push([cid[i][0], changeDue]);
    } else {
      if (changeDue % cid[i][1] === changeDue) {
        change.push([cid[i][0], (changeDue % cid[i][1]) - changeDue]);
      }
    }
  }
  return change;
}

console.log(
  cashRegister(10, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
