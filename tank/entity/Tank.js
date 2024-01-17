// 파일: Tank.js
const Radio = require('../observer_pattern/Radio');
const TankAttack = require('../decorator_pattern/TankAttack');

class Tank {
    constructor() {
        this.position = { x: 50, y: 50 };
        this.health = 100;
        this.attackStrategy = new TankAttack(); // 기본 공격 전략
        this.radio = new Radio(); // 무전기 인스턴스 생성
    }

    setState(state) {
        this.state = state;
        this.state.enterState();
    }

    moveTo(x, y) {
        this.position.x = x;
        this.position.y = y;
        console.log(`시즈탱크가 (${x}, ${y})로 이동합니다.`);
    }

    setAttackStrategy(strategy) {
        this.attackStrategy = strategy;
    }

    attack(target) {
        this.attackStrategy.ability(target);
        this.radio.broadcast(`적 유닛을 공격했습니다. 위치: (${this.position.x}, ${this.position.y})`);
    }

    takeDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            console.log('시즈탱크가 파괴되었습니다.');
        } else {
            console.log(`시즈탱크 체력: ${this.health}`);
        }
    }

    registerObserver(observer) {
        this.radio.addObserver(observer);
    }

    unregisterObserver(observer) {
        this.radio.removeObserver(observer);
    }
}

module.exports = Tank;

