function averagePurchaseTotals(customers) {
  return customers.map(customer =>customer.purchases.map(purchase => purchase.total));
}

function average(numbers) {
  return numbers.reduce((acc, number) => acc + number, 0) / numbers.length;
}

const customers = [
  { purchases: [{ total: 33 }, { total: 33 }, { total: 33 }] },
  { purchases: [{ total: 35 }, { total: 33 }, { total: 33 }] },
  { purchases: [{ total: 35 }, { total: 33 }, { total: 33 }] }
];

console.log(averagePurchaseTotals(customers));