function wakeDog(dogName, dogBreed) {
  const result = `Wake ${dogName} the ${dogBreed}`;
  console.log(result);
  return result;
}

function leashDog(dogName, dogBreed) {
  const result = `Leash ${dogName} the ${dogBreed}`;
  console.log(result);
  return result;
}

function walkToPark(dogName, dogBreed) {
  const result = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(result);
  return result;
}

function throwFrisbee(dogName, dogBreed) {
  const result = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(result);
  return result;
}

function walkHome(dogName, dogBreed) {
  const result = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(result);
  return result;
}

function unleashDog(dogName, dogBreed) {
  const result = `Unleash ${dogName} the ${dogBreed}`;
  console.log(result);
  return result;
}

let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
];

function exerciseDog(dogName, dogBreed) {
  let resultArray = [];
  for (let i = 0; i < routine.length; i++) {
    resultArray.push(routine[i](dogName, dogBreed));
  }
  return resultArray;
}