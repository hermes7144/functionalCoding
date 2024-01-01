/// It's your turn

function shoesAndSocksInventory(products) {
  var inventory = 0;
  for (var p = 0; p < products.length; p++)
  {
    var product = products[p];
    if (product.type === "shoes" || product.type === "socks")
    {
      inventory += product.numberInInventory;
    }
  }
  return inventory;
}

/// Answer

function shoesAndSocksInventory(products) {
  return products.filter(product => product.type === "shoes" || product.type === "socks")
    .map(product => product.numberInInventory)
    .reduce((acc, b) => plus(acc, b), 0)

}

function plus(x, y) {
  return x + y
}

const products = [
  { type: 'shoes', numberInInventory: 1 },
  { type: 'socks', numberInInventory: 3 },
  { type: 'socks', numberInInventory: 4 }
]

console.log(shoesAndSocksInventory(products));