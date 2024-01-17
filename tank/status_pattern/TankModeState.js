const ModeState = require(`./ModeState`);

// 파일: TankModeState.js
class TankModeState extends ModeState {
    constructor(tank) {
        super(tank)
        this.tank = tank;
    }

    enterState() {
        console.log('탱크모드로 전환되었습니다.');
    }
}

module.exports = TankModeState;