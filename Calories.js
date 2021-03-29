/*This code has been reused from the lists lecture and has been modified to fit the application*/
const itemName = document.querySelector('#lbl-item-name');
const itemCost = document.querySelector('#lbl-item-cost');
const addItemBtn = document.querySelector('#btn-add');
const outputLabel = document.querySelector('#lbl-output');
const shoppingList = document.querySelector('#list-output');
const totalDisplay = document.querySelector('#lbl-total');
let total = 0;

addItemBtn.addEventListener('click', updateInterface);

async function updateInterface(){


    //const enteredName = itemName.value;
    //const enteredCost = itemCost.value;
    
    //let output = enteredName + enteredCost;
    let output = itemName.value + itemCost.value;
    output += "\n";
    
    console.log(output);
    

    const newItem = document.createElement('ion-item');
    //newItem.textContent = enteredName + enteredCost; 
    newItem.textContent = itemName.value + itemCost.value;

    shoppingList.appendChild(newItem);
    total += +itemCost.value;
    console.log(total);
    totalDisplay.textContent = "Total Calories is " + total.toFixed(2);

    clearItem();
    
}

function clearItem(){
    itemName.value = "";
    itemCost.value = "";
}
