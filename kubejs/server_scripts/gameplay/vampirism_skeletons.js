const Player = Java.loadClass("net.minecraft.world.entity.player.Player")
const NearestAttackableTargetGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal")
const Turtle = Java.loadClass("net.minecraft.world.entity.animal.Turtle")
const IronGolem = Java.loadClass("net.minecraft.world.entity.animal.IronGolem")
const SkeletonList = ["goety:rattled","born_in_chaos_v1:skeleton_thrasher","born_in_chaos_v1:siamese_skeletons","born_in_chaos_v1:siamese_skeletonsleft","born_in_chaos_v1:siamese_skeletonsright","born_in_chaos_v1:decrepit_skeleton"]
SkeletonList.forEach(mob => {
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