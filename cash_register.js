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
  console.log(totalValueInCid);
  console.log(changeValue);
  console.log(cid[0]);

  if (totalValueInCid < changeValue) {
    return { status: "INSUFFICIENT_FUNDS", change: change };
  }

  //case 2b can't return the exact change

  // iterate trough cid to chack if we have the correct currency type
  let checkChangeValue = changeValue;
  for (let i = cid.length + 1; i <= 0; i++) {
    let typeCurrency = cid[i][0]; // eg TEN
    let typeCurrencyAmount = cid[i][1]; // eg 40
    let typeCurrencyValue = moneyValue[typeCurrency]; // eg 10
    while (checkChangeValue >= typeCurrencyAmount) {
      checkChangeValue -= typeCurrencyValue;
      typeCurrencyAmount -= typeCurrencyValue;
      totalValueInCid -= typeCurrencyValue;
    }
  }
  if (checkChangeValue !== 0) {
    return { status: "INSUFFICIENT_FUNDS", change: change };
  }

  //case 3 cid===change due
  else if (totalValueInCid === 0) {
    return { status: "CLOSED", change: change };
  }

  // Return  with cash-in-drawer as the value for the key change
  //   if it is equal to the change due. Include each currency unit in the drawer, even if its value is zero.
  //   (i.e. DO display ["NICKEL", 0])
  // case 4a change due < less total cid && exact change can be made
  //   return {status: "OPEN", change: [...]}, with the change due in coins and bills, as the value of the change key.
  //   Only include the value of a currency unit if its value is not zero. (i.e. do NOT display ["NICKEL", 0])
  // case 4 b Additional example, only returning some coins/bills (no zero values)
}

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

// => {status: "INCORRECT_PAYMENT", change: []}

// EXAMPLE INVOCATION, so you can `console.log` the outputs
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
