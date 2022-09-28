
let remove = document.querySelectorAll(".delete")
let plus = Array.from(document.querySelectorAll(".plus"))
let min = Array.from(document.querySelectorAll(".min"))
let card = Array.from(document.querySelectorAll(".items"))
let likes = Array.from(document.querySelectorAll(".like"))

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
        callTotal()
    })
    
}

for (let minBtn of min ) {
    minBtn.addEventListener('click', function(){
        minBtn.previousElementSibling.innerHTML > 0 ?
        minBtn.previousElementSibling.innerHTML-- :
        null
        callTotal()
    })
    
};
var k = 0;

function callTotal() {
    let counter = Array.from(document.querySelectorAll(".count"))
    let prices = Array.from(document.querySelectorAll(".price"))
    let sum = 0;
    for (let i in prices) {
        
        sum += prices[i].innerHTML * counter[i].innerHTML;
        
    }
    document.querySelector(".total").innerHTML = "TOTAL" + sum;

}