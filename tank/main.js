// 파일: main.js
const Tank = require('./entity/Tank');
const ObserverTankStatus = require('./observer_pattern/ObserverTankStatus');
const Radio = require('./observer_pattern/Radio');
const SiegeModeState = require('./status_pattern/SiegeModeState');
const TankModeState = require('./status_pattern/TankModeState');
const AttackStrategy = require('./strategy_pattern/AttackStrategy');
const TankAttack = require(`./decorator_pattern/TankAttack`);
const DefenseDecorator = require(`./decorator_pattern/DefenseDecorator`);
const SpeedDecorator = require(`./decorator_pattern/SpeedDecorator`);
const PowerAttackStrategy = require('./strategy_pattern/PowerAttackStrategy')
const Strategy = require(`./strategy_pattern/Strategy`);

// 시즈탱크 인스턴스 생성
const myTank = new Tank();

// 옵저버 인스턴스 생성
const observer = new ObserverTankStatus();

// 무전기 인스턴스 생성
const radio = new Radio();

// 공격 강화 전략 생성
const strategy = new Strategy();

// 옵저버 등록
radio.addObserver(observer);
myTank.registerObserver(observer);

// 시즈모드로 전환
myTank.setState(new SiegeModeState(myTank));

// 시즈모드에서 강력한 포탄 전략 설정
strategy.setStrategy(new AttackStrategy());
myTank.setAttackStrategy(new TankAttack(strategy.getStrategy()));

// 시즈모드에서 공격
myTank.attack('적 유닛');

// 탱크모드로 전환
myTank.setState(new TankModeState(myTank));

// 탱크모드 공격 속도 강화 및 강화된 공격 전략으로 탱크 공격 실행
strategy.setStrategy(new PowerAttackStrategy());
myTank.setAttackStrategy(new SpeedDecorator(new TankAttack(strategy.getStrategy())));

// 탱크모드에서 공격
myTank.attack('적 유닛');

// 탱크모드 공격 속도 강화 및 강화된 공격 전략으로 탱크 공격 실행
strategy.setStrategy(new PowerAttackStrategy());
myTank.setAttackStrategy(new DefenseDecorator(new SpeedDecorator(new TankAttack(strategy.getStrategy()))));

// 탱크모드에서 공격
myTank.attack('적 유닛');

// 피해 입음
myTank.takeDamage(20);

// 탱크모드에서 이동
myTank.moveTo(3, 3);

// 옵저버 해제
myTank.unregisterObserver(observer);

// 무전기 메시지 전송
radio.broadcast('퇴각하라');
