// 파일: PowerAttackStrategy.js
const Strategy = require(`./Strategy`)

class PowerAttackStrategy extends Strategy {
    constructor(attackPower = 100) {
        super()
        this.attackPower = attackPower;
    }

    attack(target) {
        console.log(`포탄으로 ${target}을(를) 공격합니다. 공격력: ${this.attackPower}`);
    }
}

module.exports = PowerAttackStrategy;
