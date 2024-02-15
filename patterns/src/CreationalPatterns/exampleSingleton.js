// Usage
import MySingleton from "./SingletonPattern";

const singleA = new MySingleton();
const singleB = new MySingleton();

// true
console.log(singleA.getRandomNumber() === singleB.getRandomNumber());