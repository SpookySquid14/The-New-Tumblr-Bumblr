const AbstractVillager = Java.loadClass("net.minecraft.world.entity.npc.AbstractVillager")
const ZombieList = ["goety:frayed","born_in_chaos_v1:door_knight","born_in_chaos_v1:barrel_zombie","born_in_chaos_v1:zombie_clown","born_in_chaos_v1:zombie_fisherman","born_in_chaos_v1:zombie_lumberjack","born_in_chaos_v1:decaying_zombie","born_in_chaos_v1:zombie_bruiser"]
ZombieList.forEach(mob => {
    EntityJSEvents.addGoals(mob, event => {

        
        event.removeGoal(NearestAttackableTargetGoal)
        event.arbitraryTargetGoal(2, /**@param {Internal.PathfinderMob} mob */ mob => new NearestAttackableTargetGoal(mob, Player, true, /**@param {Internal.Player} target */ target => {    
            let playerTags = target.nbt.ForgeCaps['vampirism:ifactionplayerhandler']
            if (target.isPlayer() && playerTags.toString().contains('vampirism:vampire')) {            
                return false
            }
            return true
        }));
        event.arbitraryTargetGoal(3, mob => new NearestAttackableTargetGoal(mob, IronGolem, true));
        event.arbitraryTargetGoal(3, mob => new NearestAttackableTargetGoal(mob, AbstractVillager, true));
        // Skeles apparently like killing baby turtles >.>
        event.arbitraryTargetGoal(3, mob => new NearestAttackableTargetGoal(mob, Turtle, 10, true, false, Turtle.BABY_ON_LAND_SELECTOR));
    })
})
    
// This custom goal is required to make the skeleton de-aggro if you were to equip the armor after they've targeted you already
// If you want them to target you anyways after you've "revealed your identity" to them then remove the below event
// Also remove this event if you want them to attack back if you attack them first as their hurtByTarget goal depends on them having a target


// if (curios.toString().contains('vampirism:hunter')) {
// }

// ForgeCaps.