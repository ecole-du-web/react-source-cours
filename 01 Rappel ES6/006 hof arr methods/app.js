const arr = [1,2,3,4,5,6];

const mapedArr = arr.map(x => x + 10);
console.log(mapedArr);


const filteredArr = arr.filter(num => num > 2)
console.log(filteredArr);


arr.forEach(val => {
    console.log(val - 90);
})