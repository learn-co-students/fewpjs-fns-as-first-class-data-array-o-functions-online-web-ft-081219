function wakeDog(dogName, dogBreed) {
    let string1 = `Wake ${dogName} the ${dogBreed}`;
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return string1;
}

function leashDog(dogName, dogBreed) {
    let string2 = `Leash ${dogName} the ${dogBreed}`;
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return string2;
}

function walkToPark(dogName, dogBreed) {
    let string3 = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return string3;
}

function throwFrisbee(dogName, dogBreed) {
    let string4 = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return string4;
}

function walkHome(dogName, dogBreed) {
    let string5 = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return string5;
}

function unleashDog(dogName, dogBreed) {
    let string6 = `Unleash ${dogName} the ${dogBreed}`;
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return string6;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
let myReturn = []

function exerciseDog(dogName, dogBreed) {
    for (i = 0; i < routine.length; i++) {
        myReturn.push(routine[i](dogName, dogBreed));
    }
    return myReturn;
}

exerciseDog("Rex", "Husky");