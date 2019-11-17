const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("While loop" + "\n");

let i = 0;
while (i < ingredients.length ){
  console.log(ingredients[i]);
  i += 1
}
console.log("\n" + "For loop" + "\n");

for (i = 0; i < ingredients.length; ++i) {
  console.log(ingredients[i])
}

const reverse = ingredients.reverse();
console.log ("\nAnd now reversed...\n");

for (i = 0; i < reverse.length; ++i) {
  console.log(reverse[i])
}