// EntityEvents.spawned("bossrifts:boss_rift", e => {
//     let entityAABB = e.entity.boundingBox.inflate(2) //argument is radius in blocks
//     let entitiesNear = e.entity.level.getEntitiesWithin(entityAABB)
//     // console.log(entitiesNear)

//     for (let ent = 0; ent < entitiesNear.length; ent++)
//         console.log(entitiesNear[ent])
// })

// EntityEvents.spawned('minecraft:minecart', event => {

//     const rift = event.entity
//     const entLevel = rift.level
//     console.log(entLevel)
//     var entitiesNear = entLevel.getNearbyEntities('minecraft:zombie',rift.distanceToEntitySqr() < 100)
//     // console.log("Nearby: "+entitiesNear)
    
// })