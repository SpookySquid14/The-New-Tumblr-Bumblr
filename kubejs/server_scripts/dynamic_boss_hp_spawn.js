const $TagKey = Java.loadClass("net.minecraft.tags.TagKey")
const $Registries = Java.loadClass("net.minecraft.core.registries.Registries")
const FORGE_BOSSES = $TagKey.create($Registries.ENTITY_TYPE, "forge:bosses")
const bossTagEntries = ['Is_Act','Act','is_Awaken','has_necklace','active']

EntityEvents.spawned(event => {
    const boss = event.entity
    const bossData = boss.persistentData
    let hasTag = false

    if (!boss.entityType.is(FORGE_BOSSES)) return
    console.log("Summoning Boss: "+boss.entityType)

    for(let i = 0; i<bossTagEntries.length; i++){
        console.log("Checking tags for: "+bossTagEntries[i])
        if(boss.nbt.contains(bossTagEntries[i].toString())) hasTag = true
        console.log("Tag check:" + hasTag)
        if(hasTag) return
    }
    console.log("Final check: "+hasTag)
    
    if (hasTag) return

    if (!bossData.healthModified){
        bossData.healthModified = true
        console.log("Boss: " + boss)

        let playerCount = boss.level.getPlayers().filter(player => !player.isSpectator() && player.distanceToEntitySqr(boss) <= 1500)
        console.log(playerCount)

        let additionalPlayers = playerCount.length
        if (additionalPlayers<0) additionalPlayers = 0
        console.log("There are "+additionalPlayers+" extra players")

        let baseHealth = boss.maxHealth
        console.log("Base HP is: " + baseHealth)
        let healthModifier = baseHealth * ((additionalPlayers))
        console.log("Health Modifier is: " + healthModifier)
        
        let newMaxHealth = baseHealth + healthModifier

        boss.modifyAttribute("minecraft:generic.max_health","multiplayer_health_buff_id", newMaxHealth - boss.maxHealth,"addition")
        console.log("The new max hp is: " + (newMaxHealth))

        //heal boss after increase
        let missingHealth = newMaxHealth - boss.health
        console.log("Missing HP: "+missingHealth)
        if (missingHealth>0) boss.health += missingHealth
    }

})