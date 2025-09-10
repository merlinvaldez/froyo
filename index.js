let userOrder = prompt(
  "please enter your flavors separated by a comma, we finna make some gud Froyo for ya!"
);

let flavorsArray = userOrder.split(",");

console.log(flavorsArray);

let flavorObj = {};

function countFlavors(flavorsArray) {
  for (const flavor of flavorsArray) {
    if (flavorObj[flavor]) {
      flavorObj[flavor] = +1;
    } else {
      flavorObj[flavor] = 1;
    }
  }
  return flavorObj;
}

console.table(countFlavors(flavorsArray));
