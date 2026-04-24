const $TagKey = Java.loadClass("net.minecraft.tags.TagKey")
const $Registries = Java.loadClass("net.minecraft.core.registries.Registries")
const FORGE_BOSSES = $TagKey.create($Registries.ENTITY_TYPE, "forge:bosses")

ItemEvents.entityInteracted(event => {
    const boss = event.target
    console.log(boss)
    const bossData = event.target.persistentData
    //need to find a way to limit it to only one right click and check if the boss is actively fighting
    if (!(boss.isAlive() && boss.entityType.is(FORGE_BOSSES))) return

    if (!bossData.rightClicked){
        //test if it continues if rightclicked is always false. If so, may need to make special groupings for bosses that are 
        bossData.rightClicked = true
        console.log("Boss: " + boss)

        let playerCount = boss.level.getPlayers().filter(player => !player.isSpectator() && player.distanceToEntitySqr(boss) <= 1500)
        let nearbyPlayers = playerCount.length
        if (nearbyPlayers<1) nearbyPlayers = 1

        console.log("Nearby Players: " + playerCount)
        
        console.log("There are " + nearbyPlayers + " players near the boss")

        //boss.maxHealth = boss.maxHealth * 2

        let baseHealth = boss.maxHealth
        console.log("Base HP is: " + baseHealth)
        let healthModifier = (nearbyPlayers)
        console.log("Health Modifier is: " + healthModifier)
        
        let newMaxHealth = baseHealth * healthModifier

        boss.maxHealth = newMaxHealth

        console.log("The new hp is: " + (newMaxHealth))

        //boss.modifyAttribute("generic.max_health","multiplayer_bonus",newMaxHealth - baseHealth,"addition")
        

        // let missingHealth = newMaxHealth - boss.health
        // console.log("Missing health: "+boss.health)
        // if (missingHealth > 0){
        //     boss.health += missingHealth
        // }
    }
    

})