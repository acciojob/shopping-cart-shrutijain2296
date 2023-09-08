//your code here
const listItem = document.getElementById("listItem");
const item =  document.getElementById("item-name-input");
const price =  document.getElementById("item-price-input");
const addItem = document.getElementById("addItem")
const total = document.getElementById("total");

let grandTotal = 0.0;

addItem.addEventListener('click', () => {
	const itemName = item.value.trim();
	const itemPrice = parseFloat(price.value);

	if(itemName !== "" && itemPrice >= 0){
		
		const newRow = listItem.querySelector('tbody').insertRow();
		const itemCell = newRow.insertCell(0);
		const priceCell = newRow.insertCell(1);

		itemCell.textContent = itemName;
		priceCell.textContent = `$${itemPrice.toFixed(2)}`;

		grandTotal += itemPrice;

		total.textContent = `Grand Total: $${grandTotal.toFixed(2)}`;

		item.value = "";
		price.value = "";
	}
	else{
		alert("Please input all the fields");
	}
})


