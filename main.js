var plusbtns = Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusbtns = Array.from(document.querySelectorAll(".fa-minus-circle"));
var deletebtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
var cards = Array.from(document.querySelectorAll(".card"));
var favs = Array.from(document.querySelectorAll(".fa-heart"));

//function plus
for(let plus of plusbtns){
    plus.addEventListener("click", function(){
        plus.nextElementSibling.innerHTML++;
    total()})
}
//function minus
for(let minus of minusbtns){
    minus.addEventListener("click",function() {
        minus.previousElementSibling.innerHTML > 0 ? minus.previousElementSibling.innerHTML-- : null;
total()
    })
} 
//function delete
for(let i in deletebtns){
    deletebtns[i].addEventListener("click",function()
    {
        cards[i].remove();
        total()
    })
}
//function favorites
for(let fav of favs){
fav.addEventListener("click",function() {
    if (fav.style.color == "black") {
        fav.style.color = "red";
    } else {
        fav.style.color = "black";   
}
});
    
}
//total price 
function total(){
    let qte = Array.from(document.querySelectorAll(".qute"));
    let price = Array.from(document.querySelectorAll(".unitt-price"));
    let s = 0;
    for (let i = 0; i< price.length; i++){
        s = s+ price[i].innerHTML * qte [i].innerHTML;
    }
    document.getElementById("total-price").innerHTML = s;
}