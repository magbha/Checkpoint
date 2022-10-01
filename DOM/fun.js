
let remove = document.querySelectorAll(".delete")
let plus = Array.from(document.querySelectorAll(".plus"))
let min = Array.from(document.querySelectorAll(".min"))
let card = Array.from(document.querySelectorAll(".items"))
let likes = Array.from(document.querySelectorAll(".like"))
let showPrice = Array.from(document.querySelectorAll(".price"))
let counter = Array.from(document.querySelectorAll(".count"))



for (let i of remove) (
i.addEventListener('click' , function(event) {
    var remBtn = event.target
    remBtn.parentElement.parentElement.parentElement.remove()
    callTotal()
    
})
)

for (let like of likes) (
    like.addEventListener('click' , function(){
        like.style.backgroundColor == "white" ?
        like.style.backgroundColor = "red" :
        like.style.backgroundColor = "white"
    })
)

for (let plusBtn of plus ) {
       plusBtn.addEventListener('click', function(){
        plusBtn.nextElementSibling.innerHTML++;
        price();
        callTotal();
        
    })
    
}

for (let minBtn of min ) {
    minBtn.addEventListener('click', function(){
        minBtn.previousElementSibling.innerHTML > 0 ?
        minBtn.previousElementSibling.innerHTML-- :
        null
        price();
        callTotal();
        
    })
    
};



function price() {
    for (let p in showPrice) {
    
   showPrice[p].innerHTML = showPrice[p].dataset.price * counter[p].innerHTML;
}}


function callTotal() {
    let prices = Array.from(document.querySelectorAll(".price"))
    let prix = [];
    for (let i of prices) {
        let f = Number(i.innerHTML)
        prix.push(f);   
    }
    let total = prix.reduce((nTotal , item) => {
        return item + nTotal
    } ,0)
    document.querySelector(".total").innerHTML = `TOTAL: ${total} $`;

}