const $TagKey = Java.loadClass("net.minecraft.tags.TagKey")
const $Registries = Java.loadClass("net.minecraft.core.registries.Registries")
const FORGE_BOSSES = $TagKey.create($Registries.ENTITY_TYPE, "forge:bosses")

LevelEvents.tick(event => {
  const { server, level } = event
  if (server.tickCount % 20 !== 0) return

  level
    .getEntities()
    .filter(entity => entity.isAlive() && entity.entityType.is(FORGE_BOSSES))
    .forEach(boss => {
        console.log("Boss: " + boss)

        const playerCount = level.getPlayers().filter(player => !player.isSpectator() && player.distanceToEntitySqr(boss) <= 150)
        console.log("Nearby Players: " + playerCount)
        
        console.log("There are " + playerCount.length + " players near the boss")

        let multiplier = playerCount.length*2

        console.log("The HP Modifier is " + multiplier)
                
        //boss.maxHealth = boss.maxHealth*multiplier
        //boss.health = boss.maxHealth
        let newHP = baseHP*multiplier


        
        //boss.modifyAttribute("minecraft:generic.max_health", "dddc7e3a-c415-4cb7-a488-e081ddfc0a0a", 1, "addition")
        console.log("Test")
    })
})