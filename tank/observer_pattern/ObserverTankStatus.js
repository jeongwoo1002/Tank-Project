// 파일: ObserverTankStatus.js
class ObserverTankStatus {
    constructor() {}

    notify(message) {
        console.log(`무전기 수신: ${message}`);
    }
}

module.exports = ObserverTankStatus;