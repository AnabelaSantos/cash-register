function cashRegister(price, cash, cid) {
  let changeDue = cash - price;

  let cidTotal = 0;
  for (let i in cid) {
    cidTotal += cid[i][1];
    cidTotal = parseFloat(cidTotal.toFixed(2));
  }
  let message = { status: "", change: [] };
  let change = [];
  let cidR = cid.reverse();
  let currencies = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  //Case 1
  if (cash < price) {
    message.status = "INCORRECT_PAYMENT";
    return message;
  }
  //Case 2a
  if (cidTotal < changeDue) {
    message.status = "INSUFFICIENT_FUNDS";
    return message;
  } else {
    //case4a and b
    for (let i in currencies) {
      let value = changeDue - (changeDue % currencies[i]);

      if (cidR[i][1] >= value && value != 0) {
        change.push([cidR[i][0], value]);

        changeDue = changeDue % currencies[i];
        changeDue = parseFloat(changeDue).toFixed(2);
      }
      if (cidR[i][1] < value) {
        change.push([cidR[i][0], cidR[i][1]]);

        changeDue = changeDue - cidR[i][1];
        changeDue = parseFloat(changeDue).toFixed(2);
      }
      console.log(change);
    }
  }
  //case 2b
  if (changeDue > 0) {
    message.status = "INSUFFICIENT_FUNDS";
    return message;
  }

  message.status = "OPEN";
  message.change = change.reverse();
  return message;
}

// Example function call
console.log(
  cashRegister(3.26, 100, [
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

// console.log(
//   cashRegister(10, 20, [
//     ["PENNY", 0],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 5],
//     ["FIVE", 5],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// );
