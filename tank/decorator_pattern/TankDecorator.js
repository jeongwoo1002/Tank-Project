// 파일: TankDecorator.js
const Properties = require(`./Properties`);

class TankDecorator extends Properties {

    constructor(properties) {
        super();
        this.properties = properties;
    }

    ability(target) {
        this.properties.ability(target);
    }
}

module.exports = TankDecorator;

