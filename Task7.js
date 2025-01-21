console.log("Start");

const promise = new Promise((resolve, reject) => {
    console.log("Promise started");
    resolve("Promise resolved");
});

promise.then(result => {
    console.log(result);  // This is part of the microtask queue
});

console.log("End");
console.log("----------------------")
const numbers = [1, 2, 3, 4, 5, 6];


const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);  // [2, 4, 6, 8, 10, 12]


const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);  // [2, 4, 6]


const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);  // 21
console.log("----------------------")
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fetched");
        }, 2000);
    });
}

async function main() {
    try {
        const message = await fetchData(); // Wait for the promise to resolve
        console.log(message); // Logs "fetched" after 2 seconds
    } catch (error) {
        console.log(error); // Handles any errors if the promise is rejected
    }
}

main();
console.log("--------------------------------")
async function fetchData() {
    return "fetched"; // Resolves automatically as a promise
}

fetchData()
    .then((message) => console.log(message)) // Logs "fetched"
    .catch((error) => console.log(error));
console.log("-------------------------")
// This will throw a SyntaxError
const message = await fetchData();
console.log(message);