// 파일: ModeState.js
class ModeState {
    constructor(tank) {
        this.tank = tank;
    }

    enterState() {
        console.log(`basic tank state`);
    }
}

module.exports = ModeState;