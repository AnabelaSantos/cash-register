// Anabela or Herve's code 

function cashRegister(price, cash, cid) {
    let changeDue = cash - price;
    let cidTotal = 0;
    for (let i in cid) {
      cidTotal += cid[i][1];
      cidTotal = parseFloat(cidTotal.toFixed(2));
    }
    let message = { status: "", change: [] };
    let change = [];
    //Reverse cid to start from big notes to smaller notes.
    let cidR = cid.reverse();
    //Converted the decimals to avoid problems with  values less than 1.
    let currencies = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
    //Case 1
    if (cash < price) {
      message.status = "INCORRECT_PAYMENT";
      return message;
    }
    //Case 2a
    if (cidTotal < changeDue) {
      message.status = "INSUFFICIENT_FUNDS";
      return message;
    }
    //case 3
    if (changeDue === cidTotal) {
      message.status = "CLOSED";
      message.change = cid.reverse();
      return message;
    } else {
      for (let i in currencies) {
        //loop through array curencies and use modulo to see if it is possible to use that currency for giving back the change.
        // Multiply by 100 to get rid of the decimals and avoid problems with value < 1.
        let changeC = changeDue * 100;
        let value = (changeC - (changeC % currencies[i])) / 100;
        //value of 0 means it is not possible to give back change using this currency and cidR[i][1] = 0 means there is no change in that currency so we can skip that iterration.
        if (value === 0 || cidR[i][1] === 0) {
          continue;
        }
        //Take the maximum amount possible in that currency to give back the change.
        if (cidR[i][1] >= value) {
          change.push([cidR[i][0], value]);
          //had to take care of the decimal as it was preventing the algorithm to log the change properly.
          changeDue = changeDue - value;
          changeDue = parseFloat(changeDue).toFixed(2);
        }
        //added this case to make the algorithm more efficient and use the bigger notes when possible before checking the smaller one,
        //take the maximum available and deducted that from the changeDue.
        if (cidR[i][1] < value) {
          change.push([cidR[i][0], cidR[i][1]]);
          //decimal issues.
          changeDue = changeDue - cidR[i][1];
          changeDue = parseFloat(changeDue).toFixed(2);
        }
      }
      //case 2b
      if (changeDue > 0) {
        message.status = "INSUFFICIENT_FUNDS";
        return message;
      }
      //case 4a and b
      else {
        message.status = "OPEN";
        message.change = change.reverse();
        return message;
      }
    }
  }
  //Example function call
  // console.log(
  //   cashRegister(3.26, 60, [
  //     ["PENNY", 1.01],
  //     ["NICKEL", 2.05],
  //     ["DIME", 3.1],
  //     ["QUARTER", 4.25],
  //     ["ONE", 90],
  //     ["FIVE", 55],
  //     ["TEN", 20],
  //     ["TWENTY", 60],
  //     ["ONE HUNDRED", 100],
  //   ])
  // );
  
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