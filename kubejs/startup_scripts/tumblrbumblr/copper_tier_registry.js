// // ItemEvents.toolTierRegistry(event => {
// //   event.add('copper', tier => {
// //     tier.uses = 190
// //     tier.speed = 5
// //     tier.attackDamageBonus = 0
// //     tier.level = 2
// //     tier.enchantmentValue = 14
// //     tier.repairIngredient = '#forge:ingots/copper'
// //   })
// // })

// ItemEvents.armorTierRegistry(event => {
//   event.add('copper', tier => {
//     tier.durabilityMultiplier = 11 // Each slot will be multiplied with [13, 15, 16, 11]
//     tier.slotProtections = [1, 3, 4, 2] // Slot indicies are [FEET, LEGS, BODY, HEAD]
//     tier.enchantmentValue = 8
//     tier.equipSound = 'minecraft:item.armor.equip_iron'
//     tier.repairIngredient = '#forge:ingots/copper'
//     tier.toughness = 0 // diamond has 2, netherite 3
//     tier.knockbackResistance = 0
//   })
// })

// StartupEvents.registry('item', event => {
//     event.create('minecraft:copper_helmet', 'helmet').tier('copper')
//     event.create('minecraft:copper_chestplate', 'chestplate').tier('copper')
//     event.create('minecraft:copper_leggings', 'leggings').tier('copper')
//     event.create('minecraft:copper_boots', 'boots').tier('copper')
// })