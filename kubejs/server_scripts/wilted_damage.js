const $ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")
// const $TagKey = Java.loadClass("net.minecraft.tags.TagKey")
const DAMAGE_TYPE = $ResourceKey.createRegistryKey("damage_type")
const IS_FIRE = $TagKey.create(DAMAGE_TYPE, 'minecraft:is_fire')

EntityEvents.hurt('rootoffear:light_extinguisher' ,event=>{
    let target = event.entity
    let source = event.source
    let originDamage = event.damage
    let resultDamage = originDamage
    let tpdata = target.persistentData
    if(tpdata.damagePhase) return;

    if(source.is(IS_FIRE)){
        resultDamage = 2
    }
    else if(source.immediate.player){
        if(Ingredient.of('#minecraft:axes').test(source.player.mainHandItem)){
            resultDamage = originDamage + 8
        }    
    }
    else if(source.immediate?.nbt?.HandItems){
        let weapon = source.immediate.nbt?.HandItems[0].id
        if(Ingredient.of('#minecraft:axes').test(weapon)){
            resultDamage = originDamage + 8
        }
    }

    if(!tpdata.damagePhase){
        tpdata.damagePhase = 1
        event.server.scheduleInTicks(1, e=>{
            target.attack(source, resultDamage)
            tpdata.damagePhase = 0
        })
    }
})