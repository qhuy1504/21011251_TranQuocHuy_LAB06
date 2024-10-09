const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach((dog) => {
    dog.recommendedFood = dog.weight * 0.75 * 28;
});
document.write("--------------------------------Kết quả bài số 18 --------------------------------");
document.write("<br>");

const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));

document.write(
    `Sarah's dog is eating ${sarahsDog.curFood > sarahsDog.recommendedFood ? "too much" : "too little"
    }`
);

const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recommendedFood)
    .flatMap((dog) => dog.owners);
const ownersEatTooLittle = dogs
    .filter((dog) => dog.curFood < dog.recommendedFood)
    .flatMap((dog) => dog.owners);
document.write("<br>");
document.write(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
document.write("<br>");
document.write(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);
document.write("<br>");
document.write(dogs.some((dog) => dog.curFood === dog.recommendedFood));

const isEatingOkay = (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1;
document.write("<br>");
document.write('dogs.some(isEatingOkay)');
document.write("<br>");
const dogsEatingOkay = dogs.filter(isEatingOkay);
document.write('dogsEatingOkay');

const dogsSorted = dogs
    .slice() // creates a copy of the array
    .sort((a, b) => a.recommendedFood - b.recommendedFood);
document.write("<br>");
document.write('dogsSorted');