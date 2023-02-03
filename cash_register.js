moneyValue = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

function cashRegister(price, cash, cid) {
  let result = { status: "", change: [] };

  //case 1 cash<price
  if (price > cash) {
    //return {status: "INCORRECT_PAYMENT", change: []}
    return { status: "INCORRECT_PAYMENT", change: [] };
  }

  //case 2a cid < change
  let changeValue = price - cash;
  let totalValueInCid =
    cid.PENNY +
    cid.NICKEL +
    cid.DIME +
    cid.QUARTER +
    cid.ONE +
    cid.FIVE +
    cid.TEN +
    cid.TWENTY +
    cid["ONE HUNDRED"];

  if (totalValueInCid < changeValue) {
    // return {status: "INSUFFICIENT_FUNDS", change: []}
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  //case 2b can't return the exact change

  // return {status: "INSUFFICIENT_FUNDS", change: []}
  //case 3 cid===change due
  // Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change
  //   if it is equal to the change due. Include each currency unit in the drawer, even if its value is zero.
  //   (i.e. DO display ["NICKEL", 0])
  // case 4a change due < less total cid && exact change can be made
  //   return {status: "OPEN", change: [...]}, with the change due in coins and bills, as the value of the change key.
  //   Only include the value of a currency unit if its value is not zero. (i.e. do NOT display ["NICKEL", 0])
  // case 4 b Additional example, only returning some coins/bills (no zero values)
}

console.log(
  cashRegister(19.5, 18, [
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
// => {status: "INCORRECT_PAYMENT", change: []}
