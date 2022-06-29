// default export
// const animals = [
//   { name: "cat", sound: "meow" },
//   { name: "dog", sound: "woof" }
// ];

// export to represent adding properties later in index
// const animals = [{ sound: "meow" }, { name: "dog", sound: "woof" }];

const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirements: {
      food: 2,
      water: 3
    }
  },

  { name: "dog", sound: "woof" }
];

export default animals;
