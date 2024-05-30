let numberInput = document.getElementById('inputNumber');
let nameInput = document.getElementById('inputName');
let categoryInput = document.getElementById('inputCategory');
let costInput = document.getElementById('inputCost');
let addBtn = document.getElementById('addButton');
let list1 = document.getElementById('list1');
let list2 = document.getElementById('list2');
let list3 = document.getElementById('list3');
let list4 = document.getElementById('list4');
let outButton = document.getElementById('outButton');
let ourInput = document.getElementById('enterNumber');
let di = document.getElementById('a');
let numberArray = [];
let nameArray = [];
let categoryArray = [];
let costArray = [];

function createNewList(newListItem, inp, list, array) {
    newListItem.textContent = inp.value;
    list.appendChild(newListItem);
    array.push(newListItem.textContent);
};

addBtn.addEventListener('click', () => {
    if (numberInput.value.length === 0 || nameInput.value.length === 0 || categoryInput.value.length === 0 || costInput.value.length === 0) {
        alert('you have not filled in all the fields')
    }
    if (numberInput.value < 1 || costInput.value < 1) {
        alert('The number and price must be greater than zero');
    }
    else {
    let newListItemNumber = document.createElement('li');
    createNewList(newListItemNumber, numberInput, list1, numberArray);
    let newListItemName = document.createElement('li');
    createNewList(newListItemName, nameInput, list2, nameArray);
    let newListItemCategory = document.createElement('li');
    createNewList(newListItemCategory, categoryInput, list3, categoryArray);
    let newListItemCost = document.createElement('li');
    createNewList(newListItemCost, costInput, list4, costArray);
    numberInput.value = null;
    nameInput.value = null;
    categoryInput.value = null;
    costInput.value = null;
}
});

outButton.addEventListener('click', () => {
    let checknumber = numberArray.includes(ourInput.value);
    let indexNum = numberArray.indexOf(ourInput.value);
    if (checknumber == true) {
       let valueAtIndexName = nameArray[indexNum];
       let searchNameValue = document.createElement('li');
       searchNameValue.textContent = 'name: ' + valueAtIndexName;
       di.appendChild(searchNameValue);
       let valueAtIndexCategory = categoryArray[indexNum];
       let searchCategoryValue = document.createElement('li');
       searchCategoryValue.textContent = 'category: ' + valueAtIndexCategory;
       di.appendChild(searchCategoryValue);
       let valueAtIndexCost = costArray[indexNum];
       let searchCostValue = document.createElement('li');
       searchCostValue.textContent = 'cost: ' + valueAtIndexCost;
       di.appendChild(searchCostValue);
       ourInput.value = null;
    }
    else {
        alert('Sorry, there is no such number')
    }
})