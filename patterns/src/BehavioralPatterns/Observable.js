// first implementation of the observer pattern (the simple one)
class Observable {
    constructor() {
        this.observer = [];
    }

    subscribe(fn) {
        this.observer.push(fn)
    }

    unsubscribe(fn) {
        this.observer = this.observer.filter((observer) => observer !== fn);
    }

    notify(data) {
        this.observer.forEach((observer) => observer(data));
    }
}

export default new Observable();