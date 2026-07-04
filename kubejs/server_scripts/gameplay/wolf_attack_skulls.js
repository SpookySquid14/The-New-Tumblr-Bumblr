let Skull = Java.loadClass('net.mebahel.entity.SkeletonHeadEntity')
let Decrepit = Java.loadClass('net.mcreator.borninchaosv.entity.DecrepitSkeletonEntity')
EntityJSEvents.addGoals('minecraft:wolf', event => {
    // change player class out for the actual skull class here
    event.nearestAttackableTarget(0, Skull, 20, true, false, target => {
        // condition the wolf can attack the skull
        return true
    })
    event.nearestAttackableTarget(0, Decrepit, 20, true, false, target => {
        // condition the wolf can attack the skull
        return true
    })
})