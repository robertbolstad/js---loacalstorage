const formElem = document.getElementById("listform")
const listElem = document.getElementById("itemlist")

let items = [
    {
        id: Math.random(),
        text: "Dummy item 1",
        complete: true,
    },
    {
        id: Math.random(),
        text: "gsdfs",
        complete: false,
    },
    {
        id: Math.random(),
        text: "Dummy item 3",
        complete: true,
    }
];


createList(listElem);

function createList(listElem) {

    listElem.innerHTML = "";


    items.forEach(function (item) {

        let itemClassName = "item";
        if (item.complete) {
            itemClassName += " item--complete";
        }

        listElem.innerHTML += `
            <li class="${itemClassName}" data-id="${item.id}">
                <button class="item__text">${item.text}</button>
                <button class="item__remove">Remove</button>
            </li>`
        console.log(item);
    });

    document.querySelectorAll(".item .item__text").forEach(function(itemElem) {
        itemElem.addEventListener("click", handeleItemClick);
        
    });

    document.querySelectorAll(".item .item__remove").forEach(function(itemElem) {
        itemElem.addEventListener("click", handeleItemremove);
        
    });
    

}

function handeleItemremove(event) {
    const itemId = event.currentTarget.parentElement.dataset.id;
    console.log("item clicked item ID: " + itemId);

    //console.log(event.currentTarget.parentElement);
    //console.log(event.currentTarget.parentElement.getAttribute("data-id"));
    //console.log(event.currentTarget.parentElement.dataset.id);

    items = items.filter(function (item) {

        return item.id !== parseFloat(itemId)

    });

    createList(listElem);
}

function handeleItemClick(event) {
    const itemId = event.currentTarget.parentElement.dataset.id;
    console.log("item clicked item ID: " + itemId);

    //console.log(event.currentTarget.parentElement);
    //console.log(event.currentTarget.parentElement.getAttribute("data-id"));
    //console.log(event.currentTarget.parentElement.dataset.id);

    const itemIndex = items.findIndex(function (item) {

        return item.id === parseFloat(itemId)

    });

    items[itemIndex].complete = !items[itemIndex].complete;

    createList(listElem)
}

createForm(formElem);

function createForm(formElem) {
    formElem.addEventListener("submit", handelAddItem)
    
}

function handelAddItem(event) {
    event.preventDefault();

    console.log("form submited");

    //get text from th from

    const itemText = event.target.itemtext.value.trim();

    event.currentTarget.itemtext.value = "";

    if (itemText.length > 0) {
        items.push(
            {
                id: Math.random(),
                text: itemText,
                complete: false,
            }
        )
        
    }

    //create new item in item array

    

    //re-create the list

    createList(listElem)
}