const ModeState = require(`./ModeState`);

// 파일: SiegeModeState.js
class SiegeModeState extends ModeState {
    constructor(tank) {
        super(tank)
        this.tank = tank;
    }

    enterState() {
        console.log('\n시즈모드로 전환되었습니다.');
    }
}

module.exports = SiegeModeState;