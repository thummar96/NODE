// const txt=document.getElementById("txt");
// const Add=document.getElementById("Add");
// const listitem=document.getElementById(".listitem")

let couter=1;
let jsonData=[
    {
        "key" : 1,
        "value" : 1,
    }
];
let newobject= {}

// let arr=["apple","Grapes"]

window.onload = function () {
    const item=document.getElementById("item");
    const Add=document.getElementById("Add");
    const ans=document.getElementById("ans");
    Add.addEventListener('click',() => {
        console.log(" button clicks");
        newobject.key=couter++;
        newobject.value=item.value
        // Array.push(item.value);
        // ans.value=(Array);
        jsonData.push(newobject)
        console.log(jsonData);

    })
}