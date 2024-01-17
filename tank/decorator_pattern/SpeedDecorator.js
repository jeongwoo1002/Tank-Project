// 파일: DefenseDecorator.js
const TankDecorator = require('./TankDecorator');

class SpeedDecorator extends TankDecorator {
    constructor(properties) {
        super(properties);
    }

    ability(target) {
        super.ability(target);
        this.speed();
    }

    speed() {
        console.log(`공격 속도 증가 능력 추가`);
    }
}

module.exports = SpeedDecorator;