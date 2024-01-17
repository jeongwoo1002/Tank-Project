const TankAttack = require(`./TankAttack`)

const SpeedDecorator = require(`./SpeedDecorator`)
const DefenseDecorator = require(`./DefenseDecorator`)

// 아무런 스킬 추가 없음
console.log(`level1 : `)
const level1 = new TankAttack();
level1.ability();
console.log(`\n`)

// 기본 스킬 + 스피드 증가 추가
console.log(`level2 : `)
const level2 = new SpeedDecorator(new TankAttack());
level2.ability();
console.log(`\n`)

// 기본 스킬 + 방어 능력 추가
console.log(`level3 : `)
const level3 = new DefenseDecorator(new TankAttack());
level3.ability();
console.log(`\n`)

// 모든 능력 추가
console.log(`level5 : `)
const level4 = new SpeedDecorator(new DefenseDecorator(new TankAttack()));
level4.ability();
console.log(`\n`)