let myAccount = {
    name: 'Greg',
    expenses: 0, //wydatki
    income: 0 // przychód
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
    console.log(account);
}

//  addIncome
let addIncome = function (account, amount) {
    account.income = account.income + amount;
    console.log(account)
}

//  resetAccount
let resetAccount = function (account) {
    account.expenses = 0,
    account.income = 0
}

// getAccountSummary
let getAccountSummary = function (account) {
    let accountStatement = account.income - account.expenses;
    
    console.log (`Account for Greg has ${accountStatement}. ${account.income} in income and ${account.expenses} expenses.`)
}


addExpense(myAccount, 300)
addIncome(myAccount, 1500)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)
addExpense(myAccount, 100)
addIncome(myAccount, 1000)



