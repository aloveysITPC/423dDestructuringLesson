// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

import animals, { useAnimals } from "./data";
console.log(animals);

// destructure  the animals array and give the object names instead of position
const [cat, dog] = animals;

// a constant literal pulling the properties from the cat object
// const { name, sound } = cat;

// console.log(sound);
// same as var cat = animals[0];

// can also do a renaming of properties to make things more usable
// const { name: catName, sound: catSound } = cat;
// console.log(catSound);

// setting values in deconstruction if a name property has not already been defined.
// const { name = "Fluffy", sound = "Purr" } = cat;
// console.log(name);

// working with nested objects deconstruct 1
// const { name, sound, feedingRequirements } = cat;
// console.log(feedingRequirements);
// console.log(feedingRequirements.food);

const {
  name,
  sound,
  feedingRequirements: { food, water }
} = cat;
console.log(food);

// use function and pass animal object cat.
useAnimals(cat);

console.log(useAnimals(cat));

// output of function above is an array
// create an array literal
const [animal, makeSound] = useAnimals(cat);

console.log(animal);
makeSound();

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
