let userOrder = prompt("please enter your flavors separated by a comma");

let flavors = userOrder.split(",");

console.log(flavors);

function countFlavors(flavors) {
  let flavorObj = {};
  for (let i = 0; i < flavors.length; i++) {
    flavorObj[i] = 10;
    return flavorObj;
  }
}

console.log(countFlavors(flavors));
