// 파일: AttackStrategy.js
class Strategy {
    constructor() {
    }

    attack(target) {
        this.strategy.attack();
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }

    getStrategy() {
        return this.strategy;
    }
}

module.exports = Strategy;
