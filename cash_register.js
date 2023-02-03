function cashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let closed = false;
  let cidTotal = 0;
  for (let i in cid) {
    for (let j in cid[i]) {
      cidTotal += cid[i][j];
    }
  }
  let message = { status: "", change: [] };
  let change = [];
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
    message.status = "OPEN";
    message.change = [];
    return message;
  }
}

// Example function call
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
