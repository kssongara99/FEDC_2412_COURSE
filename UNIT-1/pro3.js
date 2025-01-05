let budget = {
    income : 1000,
    expenses : 700,
};
budget.saving = budget.income - budget.expenses;
 
budget.income = 1200;
budget.saving = budget.income - budget.expenses;
console.log(budget)
