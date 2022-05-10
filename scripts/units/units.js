UnitTypes.horizon.range = 140;
const sunset = extend(UnitType, "sunset", {});
sunset.constructor = () => extend(UnitEntity, {});

const ccase = extend(UnitType, "case", {});
ccase.constructor = () => extend(UnitEntity, {});

const solution = extendContent(UnitType, "solution", {});
solution.constructor = () => extend(UnitEntity, {});

const judge = extendContent(UnitType, "judge", {
payloadCapacity: (2 * 2) * Vars.tilePayload
});
judge.constructor = () => extend(PayloadUnit, {});

const knife = extendContent(UnitType, "knife", {});
knife.constructor = () => extend(MechUnit, {});
knife.abilities.add(new UnitSpawnAbility(UnitTypes.dagger, 1500, 0, 0));
knife.immunities = ObjectSet.with(StatusEffects.wet, StatusEffects.muddy);
knife.ammoType = new ItemAmmoType(Items.titanium);


const axe = extendContent(UnitType, "axe", {});
axe.constructor = () => extend(MechUnit, {});
axe.abilities.add(new ShieldRegenFieldAbility(1, 100, 80, 60));
axe.immunities = ObjectSet.with(StatusEffects.melting, StatusEffects.burning);
axe.ammoType = new ItemAmmoType(Items.pyratite);

const tower = extendContent(UnitType, "tower", {});
tower.constructor = () => extend(MechUnit, {});
tower.immunities = ObjectSet.with(StatusEffects.wet);
tower.ammoType = new ItemAmmoType(Items.graphite);

const power = extendContent(UnitType, "power", {});
power.constructor = () => extend(MechUnit, {});
power.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.wet);
power.ammoType = new ItemAmmoType(Items.thorium);

const hammer = extendContent(UnitType, "hammer", {});
hammer.constructor = () => extend(MechUnit, {});
hammer.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.melting, StatusEffects.wet);
hammer.ammoType = new ItemAmmoType(Items.thorium);

const dawn = extendContent(UnitType, "dawn", {});
dawn.constructor = () => extend(UnitEntity, {});
dawn.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.melting);
dawn.ammoType = new ItemAmmoType(Items.titanium);

const cloud = extendContent(UnitType, "cloud", {});
cloud.constructor = () => extend(UnitEntity, {});
cloud.abilities.add(new ShieldRegenFieldAbility(1.5, 80, 80, 65));
cloud.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.melting);
cloud.ammoType = new ItemAmmoType(Items.blastCompound);

const galaxy = extendContent(UnitType, "galaxy", {});
galaxy.constructor = () => extend(UnitEntity, {});
galaxy.abilities.add(new ForceFieldAbility(65, 0.5, 200, 70));
galaxy.immunities = ObjectSet.with(StatusEffects.blasted, StatusEffects.burning);
galaxy.ammoType = new ItemAmmoType(Items.pyratite);

const twilight = extendContent(UnitType, "twilight", {});
twilight.constructor = () => extend(UnitEntity, {});
twilight.abilities.add(new StatusFieldAbility(StatusEffects.shielded, 80, 125, 10));
twilight.immunities = ObjectSet.with(StatusEffects.blasted, StatusEffects.burning, StatusEffects.melting);
twilight.ammoType = new ItemAmmoType(Items.graphite);

const darkness = extendContent(UnitType, "darkness", {});
darkness.constructor = () => extend(UnitEntity, {});
darkness.abilities.add(new UnitSpawnAbility(sunset, 3000, 0, 0));
darkness.immunities = ObjectSet.with(StatusEffects.blasted, StatusEffects.burning, StatusEffects.melting);
darkness.ammoType = new ItemAmmoType(Items.plastanium);

const blaster = extendContent(UnitType, "blaster", {});
blaster.constructor = () => extend(MechUnit, {});
blaster.abilities.add(new RepairFieldAbility(4, 30, 30), new ShieldRegenFieldAbility(2, 20, 30, 40));
blaster.ammoType = new ItemAmmoType(Items.coal);

const guard = extendContent(UnitType, "guard", {});
guard.constructor = () => extend(MechUnit, {});
guard.immunities = ObjectSet.with(StatusEffects.melting, StatusEffects.burning);
guard.ammoType = new ItemAmmoType(Items.blastCompound);

const glaive = extendContent(UnitType, "glaive", {});
glaive.constructor = () => extend(UnitEntity, {});
glaive.immunities = ObjectSet.with(StatusEffects.burning);
glaive.ammoType = new ItemAmmoType(Items.pyratite);

const rapics = extendContent(UnitType, "rapics", {});
rapics.constructor = () => extend(LegsUnit, {});
rapics.groudLayer = Layer.legUnit - 1;
rapics.ammoType = new PowerAmmoType(850);

const scales = extendContent(UnitType, "scales", {});
scales.constructor = () => extend(UnitEntity, {});
scales.defaultController = () => extend(MinerAI, {});

scales.flying = true;
scales.drag = 0.06;
scales.accel = 0.12;
scales.speed = 1.5;
scales.health = 200;
scales.engineSize = 1.8;
scales.engineOffSet = 5.7;
scales.range = 60;
scales.itemCapacity = 40;
scales.isCounted = false;
scales.ammoType = new PowerAmmoType(500);
scales.mineTier = 4;
scales.mineSpeed = 4;

scales.abilities.add(new RepairFieldAbility(5, 60, 50));

const bullet = extend(MissileBulletType, {});
bullet.speed = 5;
bullet.damage = 20;
bullet.homingPower = 0.09;
bullet.weaveMag = 4;
bullet.weaveScale = 4;
bullet.lifetime = 60;
bullet.keepVelocity = false;
bullet.shootEffect = Fx.shootHeal;
bullet.smokeEffect = Fx.hitLaser;
bullet.hitEffect = Fx.hitLaser;
bullet.despawnEffect = Fx.hitLaser;
bullet.frontColor = Color.white;
bullet.backColor = Pal.heal;
bullet.trailColor = Pal.heal;
bullet.hitSound = Sounds.none;
bullet.healPercent = 7;
bullet.collidesTeam = true;

const weapon = extendContent(Weapon, "heal-weapon-mount", {});
weapon.top = false;
weapon.reload = 30;
weapon.x = 3.5;
weapon.y = -2.5;
weapon.recoil = 2;
weapon.ejectEffect = Fx.none;
weapon.shootSound = Sounds.missile;
weapon.alternate = true;
weapon.shots = 2;
weapon.velocityRnd = 0.5;
weapon.inaccuracy = 10;
weapon.bullet = bullet;

const builder = extendContent(StatusEffect, "builder", {});
builder.speedMultiplier = 1.5;
builder.buildSpeedMultiplier = 1.5;
builder.healthMultiplier = 1.5;
builder.show = false;
builder.activeEffect = Fx.none;

const safety = extendContent(UnitType, "safety", {});
safety.constructor = () => extend(UnitEntity, {});
safety.defaultController = () => extend(BuilderAI, {});

safety.ammoType = new PowerAmmoType(850);
safety.flying = true;
safety.drag = 0.05;
safety.speed = 3;
safety.rotateSpeed = 20;
safety.accel = 0.1;
safety.range = 200;
safety.health = 550;
safety.buildSpeed = 2;
safety.engineOffset = 6.5;
safety.hitSize = 13;
safety.lowAltitude = true;
safety.mineTier = 3;
safety.mineSpeed = 5;

safety.abilities.add(new RepairFieldAbility(20, 450, 70), new StatusFieldAbility(builder, 65, 80, 15));
safety.weapons.add(weapon);

const insurance = extendContent(UnitType, "insurance", {});
insurance.constructor = () => extend(PayloadUnit, {});
insurance.defaultController = () => extend(RepairAI, {});
insurance.payloadCapacity = (2 * 2) * Vars.tilePayload;
insurance.ammoType = new PowerAmmoType(1250);
insurance.abilities.add(new RepairFieldAbility(30, 600, 100));
insurance.immunities = ObjectSet.with(StatusEffects.freezing, StatusEffects.burning, StatusEffects.wet);

const armor = extendContent(UnitType, "armor", {
payloadCapacity: (3 * 3) * Vars.tilePayload
});
armor.constructor = () => extend(PayloadUnit, {});

const shield = extendContent(UnitType, "shield", {
payloadCapacity: (5.3* 5.3) * Vars.tilePayload
});
shield.constructor = () => extend(PayloadUnit, {});

const miner = extend(UnitType, "miner", {
mineItems: Seq.with(Items.coal)
});
miner.constructor = () => extend(UnitEntity, {});

const volition = extend(UnitType, "volition", {});
volition.ammoType = new PowerAmmoType(800);
volition.constructor = () => extend(MechUnit, {});

const lot = extend(UnitType, "lot", {});
lot.ammoType = new PowerAmmoType(1800);
lot.constructor = () => extend(MechUnit, {});

const burden = extend(UnitType, "burden", {});
burden.ammoType = new PowerAmmoType(2800);
burden.constructor = () => extend(MechUnit, {});

const fate = extend(UnitType, "fate", {});
fate.abilities.add(new RepairFieldAbility(125, 120, 70), new ShieldRegenFieldAbility(100, 200, 200, 50));
fate.ammoType = new PowerAmmoType(3350);
fate.constructor = () => extend(MechUnit, {});

const challenge = extend(UnitType, "challenge", {});
challenge.ammoType = new PowerAmmoType(5500);
challenge.groundLayer = Layer.legUnit;
challenge.constructor = () => extend(LegsUnit, {});

const macromate = extend(UnitType, "macromate", {});
macromate.ammoType = new PowerAmmoType(4500);
macromate.groundLayer = Layer.legUnit;
macromate.constructor = () => extend(LegsUnit, {});

const crown = extendContent(UnitType, "crown", {});
crown.constructor = () => extend(UnitEntity, {});
crown.abilities.add(new ShieldRegenFieldAbility(10, 100, 80, 70));
crown.immunities = ObjectSet.with(StatusEffects.melting, StatusEffects.burning, StatusEffects.wet, StatusEffects.freezing, StatusEffects.sapped);
crown.ammoType = new ItemAmmoType(Items.sporePod);

const sting = extendContent(UnitType, "sting", {});
sting.constructor = () => extend(UnitEntity, {});
sting.abilities.add(new ShieldRegenFieldAbility(5, 100, 80, 70));
sting.immunities = ObjectSet.with(StatusEffects.freezing);
sting.ammoType = new ItemAmmoType(Items.sporePod);

const sickle = extendContent(UnitType, "sickle", {});
sickle.constructor = () => extend(UnitEntity, {});
sickle.abilities.add(new UnitSpawnAbility(crown, 2100, 0, 0));
sickle.immunities = ObjectSet.with(StatusEffects.freezing, StatusEffects.sapped);
sickle.ammoType = new ItemAmmoType(Items.sporePod);

const scythe = extendContent(UnitType, "scythe", {});
scythe.constructor = () => extend(UnitEntity, {});
scythe.immunities = ObjectSet.with(StatusEffects.unmoving, StatusEffects.freezing, StatusEffects.sapped);
scythe.ammoType = new ItemAmmoType(Items.sporePod);

const flu = extendContent(UnitType, "flu", {});
flu.constructor = () => extend(MechUnit, {});
flu.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.sapped);
flu.ammoType = new ItemAmmoType(Items.sporePod);

const infection = extendContent(UnitType, "infection", {});
infection.constructor = () => extend(MechUnit, {});
infection.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.sapped,  StatusEffects.sporeSlowed);

const epidemic = extendContent(UnitType, "epidemic", {});
epidemic.constructor = () => extend(MechUnit, {});
epidemic.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.sapped,  StatusEffects.sporeSlowed);

const pandemic = extendContent(UnitType, "pandemic", {});
pandemic.constructor = () => extend(MechUnit, {});
pandemic.immunities = ObjectSet.with(StatusEffects.burning, StatusEffects.sapped,  StatusEffects.sporeSlowed);

const chill = extendContent(UnitType, "chill", {});
chill.constructor = () => extend(UnitEntity, {});

const iceclone = extendContent(UnitType, "ice-clone", {});
iceclone.constructor = () => extend(UnitEntity, {});

iceclone.health = 100;
iceclone.speed = 2;
iceclone.accel = 0.04;
iceclone.drag = 0.016;
iceclone.flying = true;
iceclone.range = 60;
iceclone.hitSize = 20;
iceclone.lowAltitude = true;
iceclone.armor = 7;
iceclone.engineOffset = 12;
iceclone.engineSize = 3;

const icehail = extendContent(UnitType, "ice-hail", {});
icehail.constructor = () => extend(UnitEntity, {});
icehail.abilities.add(new UnitSpawnAbility(iceclone, 700, 0, 0));

const glacier = extendContent(UnitType, "glacier", {});
glacier.constructor = () => extend(UnitEntity, {});
glacier.immunities = ObjectSet.with(StatusEffects.freezing);

const ss = extendContent(UnitType, "snowstorm", {});
ss.constructor = () => extend(UnitEntity, {});
ss.immunities = ObjectSet.with(StatusEffects.freezing, StatusEffects.unmoving);

var minSpd = 1.1;
var maxSpd = 2.2;
var col = Color.valueOf("f3e979");

const spark = extendContent(UnitType, "spark", {});
spark.constructor = () => extend(UnitEntity, {});
spark.abilities.add(new MoveLightningAbility(5, 7, 0.17, 0.0, minSpd, maxSpd, Color.valueOf("f3e979"), "electrical-fraction-spark-heat"));
spark.ammoType = new PowerAmmoType(800);

const lightning = extendContent(UnitType, "lightning", {});
lightning.constructor = () => extend(UnitEntity, {});
lightning.abilities.add(new MoveLightningAbility(10, 10, 0.17, 0.0, minSpd, maxSpd, Color.valueOf("f3e979"), "electrical-fraction-lightning-heat"));
lightning.ammoType = new PowerAmmoType(1000);

const discharge = extendContent(UnitType, "discharge", {});
discharge.constructor = () => extend(UnitEntity, {});
discharge.ammoType = new PowerAmmoType(1500);

const tesla = extendContent(UnitType, "tesla", {});
tesla.constructor = () => extend(UnitEntity, {});
tesla.ammoType = new PowerAmmoType(2000);

const thunder = extend(UnitType, "thunder", {});
thunder.ammoType = new PowerAmmoType(3350);
thunder.constructor = () => extend(UnitEntity, {});

const sporeBuff = extend(StatusEffect, "spore-buff", {
	reloadMultiplier: 1.25,
	damageMultiplier: 1.25,
	show: false,
});