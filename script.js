// Example function call

function cashRegister(price, cash, cid) {
  if (cash < price) {
    return { status: "INCORRECT_PAYMENT", change: [] };
  }
  let change = cash - price;
  let cidTotal = 0;

  for (let element of cid) {
    cidTotal += element[1];
  }
  if (change > cidTotal) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (change === cidTotal) {
    return { status: "CLOSED", change: cid };
  } else {
    let cid = cid.reverse();
    let changeHolder = 
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0];

    for (let element of cid) {
      if (change < cid[0]) {
        changeHolder[0] += cid [0]
        change -= cid[0];
        cid[0] -= change;
      }
    }
  }
}

cashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
