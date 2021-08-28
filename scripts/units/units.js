const knife = extendContent(UnitType, "knife", {});
knife.constructor = () => extend(MechUnit, {});
knife.abilities.add(new UnitSpawnAbility(UnitTypes.dagger, 1500, 0, 0));
knife.immunities.add(StatusEffects.wet, StatusEffects.muddy);
knife.ammoType = new ItemAmmoType(Items.titanium);

const dawn = extendContent(UnitType, "dawn", {});
dawn.constructor = () => extend(UnitEntity, {});
dawn.abilities.add(new UnitSpawnAbility(UnitTypes.flare, 800, 0, 0));
dawn.immunities.add(StatusEffects.burning, StatusEffects.melting);
dawn.ammoType = new ItemAmmoType(Items.titanium);

const cloud = extendContent(UnitType, "cloud", {});
cloud.constructor = () => extend(UnitEntity, {});
cloud.abilities.add(new ShieldRegenFieldAbility(1.5, 80, 80, 65));
cloud.immunities.add(StatusEffects.burning, StatusEffects.melting);
cloud.ammoType = new ItemAmmoType(Items.blastCompound);

const galaxy = extendContent(UnitType, "galaxy", {});
galaxy.constructor = () => extend(UnitEntity, {});
galaxy.abilities.add(new ForceFieldAbility(65, 0.5, 200, 70));
galaxy.immunities.add(StatusEffects.blasted, StatusEffects.burning);
galaxy.ammoType = new ItemAmmoType(Items.pyratite);

const twilight = extendContent(UnitType, "twilight", {});
twilight.constructor = () => extend(UnitEntity, {});
twilight.abilities.add(new StatusFieldAbility(StatusEffects.shielded, 80, 125, 10));
twilight.immunities.add(StatusEffects.blasted, StatusEffects.burning, StatusEffects.melting);
twilight.ammoType = new ItemAmmoType(Items.graphite);

const darkness = extendContent(UnitType, "darkness", {});
darkness.constructor = () => extend(UnitEntity, {});
darkness.abilities.add(new UnitSpawnAbility(UnitTypes.zenith, 3500, 0, 0));
darkness.immunities.add(StatusEffects.blasted, StatusEffects.burning, StatusEffects.melting);
darkness.ammoType = new ItemAmmoType(Items.plastanium);

const axe = extendContent(UnitType, "axe", {});
axe.constructor = () => extend(MechUnit, {});
axe.abilities.add(new ShieldRegenFieldAbility(1, 100, 80, 60));
axe.immunities.add(StatusEffects.melting, StatusEffects.burning);
axe.ammoType = new ItemAmmoType(Items.pyratite);

const guard = extendContent(UnitType, "guard", {});
guard.constructor = () => extend(MechUnit, {});
guard.immunities.add(StatusEffects.melting, StatusEffects.burning);
quard.ammoType = new ItemAmmoType(Items.blastCompound);

const tower = extendContent(UnitType, "tower", {});
tower.constructor = () => extend(MechUnit, {});
tower.immunities.add(StatusEffects.wet);
tower.ammoType = new ItemAmmoType(Items.graphite);

const power = extendContent(UnitType, "power", {});
power.constructor = () => extend(MechUnit, {});
power.immunities.add(StatusEffects.burning, StatusEffects.wet);
power.abilities.add(new StatusFieldAbility(StatusEffects.overdrive, 100, 80, 80));
power.ammoType = new ItemAmmoType(Items.thorium);

const world = extendContent(UnitType, "world", {});
world.constructor = () => extend(MechUnit, {});
world.immunities.add(StatusEffects.burning, StatusEffects.melting, StatusEffects.wet);
world.abilities.add(new StatusFieldAbility(StatusEffects.boss, 100, 80, 1));
world.ammoType = new ItemAmmoType(Items.thorium);

const rapics = extendContent(UnitType, "rapics", {});
rapics.constructor = () => extend(LegsUnit, {});
rapics.abilities.add(new MoveLightningAbility(30, 12, 20, 0, 0.75, 1.5, Color.valueOf("bf92f9")));
rapics.groudLayer = Layer.legUnit - 1;
rapics.ammoType = new PowerAmmoType(850);


const crown = extendContent(UnitType, "crown", {});
crown.constructor = () => extend(UnitEntity, {});
crown.abilities.add(new ShieldRegenFieldAbility(10, 100, 80, 70));
crown.immunities.add(StatusEffects.melting, StatusEffects.burning, StatusEffects.wet, StatusEffects.freezing, StatusEffects.sapped);
crown.ammoType = new ItemAmmoType(Items.sporePod);

const glaive = extendContent(UnitType, "glaive", {});
glaive.constructor = () => extend(UnitEntity, {});
glaive.abilities.add(new StatusFieldAbility(StatusEffects.overclock, 30, 130, 80));
glaive.immunities.add(StatusEffects.burning);
glaive.ammoType = new ItemAmmoType(Items.pyratite);

const totem = extendContent(UnitType, "totem", {});
totem.constructor = () => extend(MechUnit, {});
totem.abilities.add(new RepairFieldAbility(7, 70, 80));
totem.immunities.add(StatusEffects.wet, StatusEffects.freezing, StatusEffects.muddy);
totem.ammoType = new PowerAmmoType(800);

const sting = extendContent(UnitType, "sting", {});
sting.constructor = () => extend(UnitEntity, {});
sting.abilities.add(new ShieldRegenFieldAbility(5, 100, 80, 70));
sting.immunities.add(StatusEffects.freezing);
sting.ammoType = new ItemAmmoType(Items.sporePod);

const sickle = extendContent(UnitType, "sickle", {});
sickle.constructor = () => extend(UnitEntity, {});
sickle.abilities.add(new UnitSpawnAbility(crown, 2100, 0, 0));
sickle.immunities.add(StatusEffects.freezing, StatusEffects.sapped);
sickle.ammoType = new ItemAmmoType(Items.sporePod);

const scythe = extendContent(UnitType, "scythe", {});
scythe.constructor = () => extend(UnitEntity, {});
scythe.immunities.add(StatusEffects.unmoving, StatusEffects.freezing, StatusEffects.sapped);
scythe.ammoType = new ItemAmmoType(Items.sporePod);

const blaster = extendContent(UnitType, "blaster", {});
blaster.constructor = () => extend(MechUnit, {});
blaster.abilities.add(new RepairFieldAbility(4, 30, 30), new ShieldRegenFieldAbility(2, 20, 30, 40));
blaster.ammoType = new ItemAmmoType(Items.coal);

const mantle = extendContent(UnitType, "mantle", {});
mantle.constructor = () => extend(UnitEntity, {});
mantle.abilities.add(new ForceFieldAbility(50, 0.2, 60, 60), new ShieldRegenFieldAbility(8, 60, 45, 70), new UnitSpawnAbility(UnitTypes.crawler, 1200, 0, 0));
mantle.immunities.add(StatusEffects.unmoving, StatusEffects.freezing);
mantle.ammoType = new ItemAmmoType(Items.coal);

const vano = extendContent(UnitType, "vano", {});
vano.constructor = () => extend(UnitEntity, {});
vano.defaultController = () => extend(MinerAI, {});

vano.flying = true;
vano.drag = 0.06;
vano.accel = 0.12;
vano.speed = 1.5;
vano.health = 200;
vano.engineSize = 1.8;
vano.engineOffSet = 5.7;
vano.range = 60;
vano.itemCapacity = 40;
vano.isCounted = false;
vano.ammoType = new PowerAmmoType(500);
vano.mineTier = 4;
vano.mineSpeed = 4;

vano.abilities.add(new RepairFieldAbility(5, 60, 50));

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

const pal = extendContent(UnitType, "pal", {});
pal.constructor = () => extend(UnitEntity, {});
pal.defaultController = () => extend(BuilderAI, {});

pal.ammoType = new PowerAmmoType(850);
pal.flying = true;
pal.drag = 0.05;
pal.speed = 3;
pal.rotateSpeed = 20;
pal.accel = 0.1;
pal.range = 200;
pal.health = 550;
pal.buildSpeed = 2;
pal.engineOffset = 6.5;
pal.hitSize = 13;
pal.lowAltitude = true;
pal.mineTier = 3;
pal.mineSpeed = 5;

pal.abilities.add(new RepairFieldAbility(20, 450, 70), new StatusFieldAbility(builder, 65, 80, 15));
pal.weapons.add(weapon);

const magno = extendContent(UnitType, "magno", {});
magno.constructor = () => extend(UnitEntity, {});
magno.defaultController = () => extend(RepairAI, {});
magno.payloadCapacity = 2;
magno.ammoType = new PowerAmmoType(1250);
magno.abilities.add(new RepairFieldAbility(30, 600, 100));
magno.immunities.add(StatusEffects.freezing, StatusEffects.burning, StatusEffects.wet);

const trident = extendContent(UnitType, "trident", {});
trident.constructor = () => extend(UnitEntity, {});
trident.payloadCapacity = 1;
trident.ammoType = new PowerAmmoType(700);
trident.abilities.add(new RepairFieldAbility(30, 600, 100), new ForceFieldAbility(30, 0.1, 50, 80));
trident.immunities.add(StatusEffects.freezing, StatusEffects.wet);

const flu = extendContent(UnitType, "flu", {});
flu.constructor = () => extend(MechUnit, {});
flu.immunities.add(StatusEffects.burning, StatusEffects.sapped);
flu.ammoType = new ItemAmmoType(Items.sporePod);

const infection = extendContent(UnitType, "infection", {});
infection.constructor = () => extend(MechUnit, {});
infection.immunities.add(StatusEffects.burning, StatusEffects.melting, StatusEffects.sapped, StatusEffects.wet);
infection.abilities.add(new ForceFieldAbility(60, 0.2, 250, 240));

const epidemic = extendContent(UnitType, "epidemic", {});
epidemic.constructor = () => extend(MechUnit, {});
epidemic.immunities.add(StatusEffects.burning, StatusEffects.melting, StatusEffects.sapped,  StatusEffects.wet);
epidemic.abilities.add(new UnitSpawnAbility(flu, 1000, 20, 0), new UnitSpawnAbility(flu, 1000, -20, 0));

const pandemic = extendContent(UnitType, "pandemic", {});
pandemic.constructor = () => extend(MechUnit, {});
pandemic.immunities.add(StatusEffects.burning, StatusEffects.melting, StatusEffects.sapped,  StatusEffects.wet);
pandemic.abilities.add(new UnitSpawnAbility(infection, 2000, 0, 0));

const chill = extendContent(UnitType, "chill", {});
chill.constructor = () => extend(UnitEntity, {});
chill.abilities.add(new StatusFieldAbility(StatusEffects.freezing, 120, 35, 40));

const glacier = extendContent(UnitType, "glacier", {});
glacier.constructor = () => extend(UnitEntity, {});
glacier.immunities.add(StatusEffects.freezing, StatusEffects.unmoving);
glacier.abilities.add(new StatusFieldAbility(StatusEffects.freezing, 180, 40, 60), new UnitSpawnAbility(chill, 900, -8, -8), new UnitSpawnAbility(chill, 900, 8, -8));

const ss = extendContent(UnitType, "snowstorm", {});
ss.constructor = () => extend(UnitEntity, {});
ss.immunities.add(StatusEffects.freezing, StatusEffects.unmoving);

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