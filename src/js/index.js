var profit_rate = 0.0;
var rate = 1.005;
function increment() {
  var buying_price = document.getElementById("buying_price").value;
  rate += 0.005;
  var selling_price = "$" + Math.round(buying_price * rate * 1000) / 1000;
  profit_rate += 0.5;
  document.getElementById("selling_price").textContent = selling_price;
  document.getElementById("profit_rate").textContent = profit_rate + "%";
}

function decrement() {
  var buying_price = document.getElementById("buying_price").value;
  rate -= 0.005;
  var selling_price = "$" + Math.round(buying_price * rate * 1000) / 1000;
  profit_rate -= 0.5;
  document.getElementById("selling_price").textContent = selling_price;
  document.getElementById("profit_rate").textContent = profit_rate + "%";
}

function refresh() {
  rate = 1.005;
  profit_rate = 0.0;
  document.getElementById("buying_price").value = "";
  document.getElementById("selling_price").textContent = "";
  document.getElementById("profit_rate").textContent = profit_rate + "%";
}
