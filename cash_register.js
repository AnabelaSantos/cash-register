function cashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let closed = false;
  let cidTotal = 0;
  for (let i in cid) {
    cidTotal += cid[i][1];
    cidTotal = parseFloat(cidTotal.toFixed(2));
  }
  let message = { status: "", change: [] };
  let change = [];
  let cidR = cid.reverse();
  let currencies = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  if (closed || changeDue === cidTotal) {
    message.status = "CLOSED";
    message.change = cid;
    return message;
  }
  if (cash < price) {
    message.status = "INCORRECT_PAYMENT";
    message.change = [];
    return message;
  }
  if (cidTotal < changeDue) {
    message.status = "INSUFFICIENT_FUNDS";
    message.change = [];
    return message;
  } else {
    for (let i in currencies) {
      if (changeDue % currencies[i] === 0) {
        change.push([cidR[i][0], changeDue]);
      } else {
        if (changeDue % currencies[i] === changeDue) {
          change.push([cidR[i][0], (changeDue % cidR[i][1]) - changeDue]);
        }
      }
    }
    message.status = "OPEN";
    message.change = change.reverse();
    return message;
  }
}

// Example function call
console.log(
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
  ])
);
