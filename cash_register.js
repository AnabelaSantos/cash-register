function cashRegister(price, cash, cid) {
  let change = cash - price;
  let closed = false;
  let message = { status, change };
  if (closed) {
    return message;
  }
  if (cash < price) {
    return message;
  }
  if (cid < change) {
    return message;
  } else {
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
