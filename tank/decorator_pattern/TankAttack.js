// 파일: TankAttack.js
const Properties = require(`./Properties`);

class TankAttack extends Properties{
    constructor(strategy) {
        super(strategy);
        this.strategy = strategy;
    }

    ability(target) {
        this.strategy.attack(target);
    }
}

module.exports = TankAttack;

