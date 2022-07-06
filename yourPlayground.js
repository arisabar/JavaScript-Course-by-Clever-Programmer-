// makanan = parseInt(prompt("harga makanan yang kamu beli?"));
// diskon = parseFloat(prompt("Paket diskon yang kamu ambil? %") / 100);

// bayar = makanan * diskon;
// totalBayar = makanan + bayar;

// alert("harga yang kamu bayar " + totalBayar);

function calculateFoodTotal(food, tip) {
  tipPercentage = tip / 100;
  tipAmount = food * tipPercentage;
  total = sum(food, tipAmount);
  return total;
}

console.log(calculateFoodTotal(100, 20));

const groceries = ["🍌", "🍎", "🍊", "🍐"];
groceries.push("🍪");
groceries.unshift("😎");

console.log(groceries);
const showSlice = groceries.slice(1, 4);
console.log(showSlice);
