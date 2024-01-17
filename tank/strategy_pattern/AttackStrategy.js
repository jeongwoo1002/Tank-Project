// 파일: AttackStrategy.js
const Strategy = require(`./Strategy`)

class AttackStrategy extends Strategy {
    constructor(attackPower = 30) {
        super();
        this.attackPower = attackPower;
    }

    attack(target) {
        console.log(`포탄으로 ${target}을(를) 공격합니다. 공격력: ${this.attackPower}`);
    }
}

module.exports = AttackStrategy;
