// 파일: Radio.js
class Radio {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    broadcast(message) {
        this.observers.forEach((observer) => observer.notify(message));
    }
}

module.exports = Radio;