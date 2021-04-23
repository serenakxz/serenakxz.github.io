console.log("hello");

let oneContainer = document.getElementById("one");
let recipeOne = document.createElement("div");
oneContainer.appendChild(recipeOne);


function makeTea(water,milk,tealeaf,sugar,pot){
    console.log("We are going to boil"+ water+ " ounces of water with" + tealeaf + "in a "+ pot + " ounce pot."+ "Add " + milk +" ounce of milk with " + sugar+ " ounce of sugar after cooling down.");
    recipeOne.innerHTML = "We are going to boil "+ water+ " ounces of water with " + tealeaf + " onunce tealeves in a "+ pot + " ounce pot. "+ "Add " + milk +" ounce of milk with " + sugar+ " ounce of sugar and keeps boiling for a while. Enjoy it after cooling down.";
}

makeTea(30,30,3,1,120);

let twoContainer = document.getElementById("two");
let recipeTwo = document.createElement("div");
let recipeTwoAlt = document.createElement("div");
twoContainer.appendChild(recipeTwo);
let imgBeef = document.createElement("img");
imgBeef.src = "beef.png";
imgBeef.classList.add("burger-img");
twoContainer.appendChild(imgBeef);
twoContainer.appendChild(recipeTwoAlt);
recipeTwo.classList.add("burger");
recipeTwoAlt.classList.add("burger");


let meat1 = "beef patties<br> ";
let veg1 = "lettuce<br> ";
let bread1 = "whole wheat bread<br> ";
let cheese1 ="cheddar<br> ";
function makeBurger(meat, vegetable, cheese, bread){
    let burger = bread+cheese+vegetable+meat+bread;
    return burger;
}
let cheeseBurger = makeBurger(meat1, veg1, cheese1, bread1);
console.log (cheeseBurger);
recipeTwo.innerHTML = cheeseBurger;

let meat2 = "beef parrie<br> ";
let veg2 = "mushroom<br> ";
let bread2 = "sesame seed burger<br> ";
let cheese2 ="swiss cheese<br> ";
let mushroomBurger = makeBurger(meat2, veg2, cheese2, bread2);
console.log (mushroomBurger);
recipeTwoAlt.innerHTML = mushroomBurger;


let threeContainer = document.getElementById("three");
let recipeThree = document.createElement("div");
threeContainer.appendChild(recipeThree);
recipeThree.classList.add("pizza");

let sauce1 = "tomato sauce<br> ";
let mozzarella1 = "fresh mozzarella cheese, torn into small pieces<br> ";
let spice1 = "fresh basil leaf<br> ";
let oil1 ="olive oil<br> ";
let toppings1 ="fresh basil leaf";
let dough1 = "the dough ingredients "
function makePizza(sauce, mozzarella, spice, oil, toppings, dough){
    let pizza = spice+toppings+mozzarella+sauce+oil+dough;
    return pizza;
}
let pepperoni = makePizza(sauce1, mozzarella1, spice1, oil1, toppings1, dough1);
console.log (pepperoni);
recipeThree.innerHTML = pepperoni;

let imgPizza = new Image();
imgPizza.src = "pizza.jpeg";
imgPizza.classList.add("pizza-img");
threeContainer.appendChild(imgPizza);


$(document).ready(function(){
    $(".button-1").click(function(){
      var div = $(".burger-img");
      div.animate({left: '250px', height: '+=150px',width: '+=150px'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '150px', opacity: '0.8'}, "slow");
    });
    $(".button-2").click(function(){
        var div = $(".pizza-img");
        div.animate({left: '250px', height: '+=150px',width: '+=150px'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
      });
  });