## GOAL: Implement a cash register function cashRegister that:

## Accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

## cid is a 2D array listing available currency.

## The cashRegister function should always return an object with a status key and a change key.

## Return {status: "INCORRECT_PAYMENT", change: []} if cash is less than the price.

## Return {status: "INSUFFICIENT_FUNDS", change: []} if cid (cash-in-drawer) is less than the change due or if you cannot return the exact change.

## Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due. Include each currency unit in the drawer, even if its value is zero. (i.e. DO display ["NICKEL", 0])

## Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, as the value of the change key. Only include the value of a currency unit if its value is not zero. (i.e. do NOT display ["NICKEL", 0])

Currency types and amounts that may be in the cid array
| **Currency Unit** | **Amount** |
| --- | ---|
| Penny | $0.01 (PENNY) |
| Nickel | $0.05 (NICKEL) |
| Dime | $0.1 (DIME) |
| Quarter | $0.25 (QUARTER) |
| Dollar | $1 (ONE) |
| Five Dollars | $5 (FIVE) |
| Ten Dollars | $10 (TEN) |
| Twenty Dollars | $20 (TWENTY) |
| One-hundred Dollars | $100 (ONE HUNDRED) |
