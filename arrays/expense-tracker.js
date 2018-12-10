const account = {
    name: 'Greg',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        const expense = 
            {
                description: description,
                amount: amount
            }
        this.expenses.push(expense);
    },
    addIncome: function(description, amount) {
        const income = 
            {
                description: description,
                amount: amount
            }
        this.income.push(income)
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncome = 0
        
        this.expenses.forEach(function(expense, index) {
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function(income, index) {
            totalIncome = totalIncome + income.amount
        })

        let balance = totalIncome - totalExpenses

        return `${this.name} has ${totalExpenses} DKK in expenses and ${totalIncome} DKK in income. Account balance is ${balance} DKK.`
    }
}


account.addExpense('Rent', 5700)
account.addIncome('Wedding', 20000 )
account.addIncome('Website', 324 )
account.addExpense('Beer with myself', 10);

console.log(account.getAccountSummary())