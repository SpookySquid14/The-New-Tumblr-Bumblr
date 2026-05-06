EntityEvents.spawned('bossrifts:boss_rift', event => {

    const rift = event.entity
    const entitiesNear = rift.level.getNearestEntity
    console.log(entitiesNear+" nearby")
    //plan is to get all nearby entities, then filter through them to get the closest one
})