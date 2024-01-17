// 파일: DefenseDecorator.js
const TankDecorator = require('./TankDecorator');

class DefenseDecorator extends TankDecorator {
    constructor(properties) {
        super(properties);
    }

    ability(target) {
        super.ability(target);
        this.defense();
    }

    defense() {
        console.log(`방어 능력 추가`);
    }
}

module.exports = DefenseDecorator;