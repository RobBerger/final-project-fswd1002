// Global variables
var crust = document.getElementById('crust');
var sauce = document.getElementById('sauce');
// toppings array
var toppings = [ ];
// event listener
var formButton = document.getElementById('btn');
formButton.addEventListener("click", function getName(event) {
    event.preventDefault();
    crust = document.getElementById('crust').value;
    sauce = document.getElementById('sauce').value;
    var topping1 = document.getElementById('topping1').value;
    var topping2 = document.getElementById('topping2').value;
    var topping3 = document.getElementById('topping3').value;
    toppings.push(topping1);
    toppings.push(topping2);
    toppings.push(topping3);
    calculateTotal(toppings);
})

function calculateTotal(toppingArray) {  
    let total = 0; 
    let toppingCost = 2.50; 
    let baseCost = 5.50; // cost of crust and sauce

    // order string concatenation
    let orderString = crust + " pizza with " + sauce;

    let toppingString = "Toppings: ";

    // For Loop
    for(var i = 0; i < toppings.length; i++){
       if (toppings[i] != "") {
        total = total + toppingCost;
        toppingString = toppingString + " " + toppings[i];
       }
    }
    // total = baseCost + cost of all toppings
    total = total + baseCost;
    // set DOM total += total   
    var pricePrint = document.getElementById("total");
    pricePrint.innerHTML = "$" + total;
    // use DOM: = orderString 
    var orderStringPrint = document.getElementById("pizzaOrder");
    orderStringPrint.innerHTML = orderString;
    // use DOM: = toppingString 
    var toppingStringPrint = document.getElementById("toppings");
    toppingStringPrint.innerHTML = toppingString;
}