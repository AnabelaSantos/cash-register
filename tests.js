moneyValue = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1.0,
  FIVE: 5.0,
  TEN: 10.0,
  TWENTY: 20.0,
  "ONE HUNDRED": 100.0,
};

function cashRegister(price, cash, cid) {
  let change = [];
  let cidAfterChangeGiven = cid;
  let result = { status: "", change: change };

  //case 1 cash<price
  if (price > cash) {
    return { status: "INCORRECT_PAYMENT", change: change };
  }
  //case 2a cid < change
  let changeValue = cash - price;

  let totalValueInCid = 0;

  for (let i = 0; i < cid.length; i++) {
    totalValueInCid += cid[i][1];
  }

  //   console.log(totalValueInCid);

  if (totalValueInCid < changeValue) {
    return { status: "INSUFFICIENT_FUNDS", change: change };
//   }
//   //   case 3 cid===change due
//   else if (changeValue === totalValueInCid) {
//     return { status: "CLOSED", change: change };

//     //case 2b can't return the exact change

//     // iterate trough cid to check if we have the correct currency type
//   } else {
//     for (let i = cid.length + 1; i <= 0; i--) {
//       let checkChangeValue = changeValue;
//       let typeCurrency = cid[i][0]; // get the currency type "penny" or "nickel"...
//       let typeCurrencyAmount = cid[i][1]; // get the amount in each currency type for example, $20 in "ten"
//       let typeCurrencyValue = moneyValue[elem[0]]; // Get the value of each type of currency "quarter" has the value of 0.25
//       while (checkChangeValue >= typeCurrencyAmount && typeCurrencyAmount > 0) {
//         checkChangeValue -= typeCurrencyValue;
//         typeCurrencyAmount -= typeCurrencyValue;
//         totalValueInCid -= typeCurrencyValue;
//       }
//     }
//   }
// }
console.log(
  cashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
/* 
  {
    status: "CLOSED",
    change: [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ]
  }
  */
