StartupEvents.registry('irons_spellbooks:spells', event => {
    event.create('laserbeam')
    .setBaseSpellPower(2.5)
    .setSpellPowerPerLevel(1)
    .setBaseManaCost(25)
    .setManaCostPerLevel(5)
    .setSchool('cataclysmic_spellcasting:cyber')
    .setMinRarity('common')
    .setMaxLevel(10)
    .onCast(ctx => global.player_shoot_laser(ctx))
    
})

global.player_shoot_laser = (ctx) => {
    let { entity } = ctx
    let {level, x, y, z} = entity
    let aim = entity.getLookAngle()
    console.log(aim)
    let laserSpeed = 2.5

    const laser = level.createEntity('cataclysm:laser_beam')
    laser.setPosition(x,y,z)

    // laser.setDeltaMovement(
    //     aim.x * laserSpeed,
    //     aim.y * laserSpeed,
    //     aim.z * laserSpeed
    // )
    laser.nbt.merge({Motion: [aim.x, aim.y, aim.z]})
    //console.log(laser.nbt.get(Motion))
    laser.spawn()
}