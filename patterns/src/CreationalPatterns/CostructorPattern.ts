// basic constructor

class Car {
    private model: string;
    private year: number;
    miles: number;
    constructor(model: string, year: number , miles: number) {
        this.model = model;
        this.year = year;
        this.miles = miles;
    }

    toString() {
        return `${this.model} has done ${this.miles} miles`;
    }
}

let civic = new Car('HondaCivic', 2000, 200);

console.log(civic.toString())


export {}