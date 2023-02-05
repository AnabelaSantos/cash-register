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
  let currencies = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let changeDue = cash - price;
  let change = [];
  let cidR = cid.reverse();
  for (let i in currencies) {
    if (changeDue % currencies[i] === 0) {
      change.push([cidR[i][0], changeDue]);
      return change;
    } else {
      if (changeDue % currencies[i] === changeDue) {
        change.push([cidR[i][0], (changeDue % cidR[i][1]) - changeDue]);
      }
    }
  }
  return change;
}

// {
//   if (changeDue % currencies[i] === changeDue) {
//     change.push([cidR[i][0], (changeDue % cidR[i][1]) - changeDue]);
//   }
// }
// if (changeDue % currencies[i] === 0) {
//   if (changeDue - cidR[i][1] === 0) {
//     change.push([cidR[i][0], changeDue]);
//     // } else if (cidR[i][1] - changeDue > 0) {
//     //   changeDue = cidR[i][1] - changeDue;
//     //   change.push([cidR[i][0], changeDue]);
//     // }
//     // changeDue = changeDue - (changeDue % cidR[i][1]);
//   }
//   if (changeDue - cidR[i][1] >= 0) {
//     change.push([cidR[i][0], changeDue]);
//   } //else {
//   //   change.push([cidR[i][0], (changeDue % cidR[i][1]) - changeDue]);
//   //   changeDue = changeDue % cidR[i][1];
// }
// }

// message.status = "OPEN";
// message.change = change.reverse();
// return message;
// }

console.log(
  cashRegister(5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 0],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

// if (changeDue % currencies[i] === 0) {
//   if (cidR[i][1] > 0) {
//     change.push([cidR[i][0], cidR[i] - changeDue]);
//   } else {
//     change.push([cidR[i][0], 0]);
//   }
//   if (changeDue % currencies[i] === changeDue) {
//     change.push([cidR[i][0], 0]);
//   } else {
//     if (cidR[i][1] > 0) {
//       change.push([cidR[i][1], changeDue - (changeDue % currencies[i])]);
//       changeDue = changeDue % currencies[i];
//     }
//   }
// }
