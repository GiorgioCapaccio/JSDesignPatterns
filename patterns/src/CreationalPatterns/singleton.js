// Instances stores a reference to the singleton
let instance;

// Private methods and variables
const privateMethod = () => {
    console.log("I'm a private")
};

const privateVariable = "I'm private too";
const randomNumber = Math.random();

// Singleton

class MySingleton {
    constructor() {
        if(!istance) {
            this.publicProperty = 'I am also public';
            instance = this;
        }

        return instance;
    }

    // Public methods
    publicMethod(){
        console.log('The public can see me')
    };

    getRandomNumber(){
        return randomNumber;
    }

}

export default MySingleton;