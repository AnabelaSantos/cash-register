moneyValue = {
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
    result.change = cid;
    return result;
  }

  //case 2b can't return the exact change

  // iterate trough cid to chack if we have the correct currency type
  let checkChangeValue = changeValue;
  for (let i = cid.length + 1; i <= 0; i--) {
    console.log(i);
    let typeCurrency = cid[i][0]; // eg TEN
    let typeCurrencyAmount = cid[i][1]; // eg 40
    let typeCurrencyValue = moneyValue[typeCurrency]; // eg 10
    while (checkChangeValue >= typeCurrencyAmount && typeCurrencyAmount > 0) {
      checkChangeValue -= typeCurrencyValue;
      typeCurrencyAmount -= typeCurrencyValue;
      totalValueInCid -= typeCurrencyValue;
    }
  }
  if (checkChangeValue !== 0) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  // case 4
}
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

// => {status: "OPEN", change: [["QUARTER", 0.5]]}
