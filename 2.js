function getBudgets(users) {
  let budgetSum = users.reduce((acc, curUser) => {
    acc += curUser.budget;
    return acc;
  }, 0);
  console.log(budgetSum);
}

getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
]);
getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 },
  ]);
