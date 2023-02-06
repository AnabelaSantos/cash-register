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
  let cidReversed = cid.reverse();
  let result = { status: "", change: change };

  //case 1 cash<price
  if (price > cash) {
    result.status = "INCORRECT_PAYMENT";

    return result;
  }

  //case 2a cid < change
  let changeValue = cash - price;

  let totalValueInCid = 0;
  for (let i = 0; i < cid.length; i++) {
    totalValueInCid += cid[i][1];
  }

  if (totalValueInCid < changeValue) {
    result.status = "INSUFFICIENT_FUNDS";

    return result;
  }

  // case 3 cid===change due
  if (totalValueInCid === changeValue) {
    result.status = "CLOSED";
    result.change = cid.reverse();
    return result;
  }
  //case 2b can't return the exact change

  // iterate trough cid to check if we have the correct currency type
  let checkChangeValue = changeValue;
  for (let i = 0; i < cidReversed.length; i++) {
    let typeCurrency = cidReversed[i][0]; // eg TEN//get the currency type "penny" or "nickel"...
    let typeCurrencyAmount = cidReversed[i][1]; // eg 40//get the amount in each currency type for example, $40 in "twenty"
    let typeCurrencyValue = moneyValue[typeCurrency]; // Get the value of each type of currency "quarter" has the value of 0.25

    if (checkChangeValue >= typeCurrencyValue && typeCurrencyAmount > 0) {
      let newEntryChange = [typeCurrency, 0.0];
      while (checkChangeValue >= typeCurrencyValue && typeCurrencyAmount > 0) {
        checkChangeValue -= typeCurrencyValue;
        typeCurrencyAmount -= typeCurrencyValue;
        totalValueInCid -= typeCurrencyValue;
        newEntryChange[1] += typeCurrencyValue;
        checkChangeValue = Number(checkChangeValue.toFixed(2));
      }
      change.push(newEntryChange);
    }
    cidAfterChangeGiven[i][1] -= Math.round(typeCurrencyValue.toFixed(2));
  }
  checkChangeValue = checkChangeValue.toFixed(2);
  totalValueInCid = Math.round(totalValueInCid.toFixed(2));

  if (checkChangeValue !== "0.00") {
    result.status = "INSUFFICIENT_FUNDS";
    //  result.change = [];
    return result;
  }

  //case 4 Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, as the value of the change key.
  //Only include the value of a currency unit if its value is not zero. (i.e. do NOT display ["NICKEL", 0])
  result.status = "OPEN";
  result.change = change.reverse();
  return result;
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
