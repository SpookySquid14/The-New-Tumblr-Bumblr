ItemEvents.toolTierRegistry(event => {
  event.add('tumblrbumblr:copper', tier => {
    tier.uses = 190
    tier.speed = 5
    tier.attackDamageBonus = 1
    tier.level = 1
    tier.enchantmentValue = 13
    tier.repairIngredient = '#forge:ingots/copper'
  })
})

ItemEvents.armorTierRegistry(event => {
  event.add('tumblrbumblr:copper', tier => {
    tier.durabilityMultiplier = 11 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [1, 3, 4, 2] // Slot indicies are [FEET, LEGS, BODY, HEAD]
    tier.enchantmentValue = 8
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#forge:ingots/copper'
    tier.toughness = 0 // diamond has 2, netherite 3
    tier.knockbackResistance = 0
  })
})

StartupEvents.registry('item', event => {
    event.create('tumblrbumblr:copper_helmet', 'helmet').tier('tumblrbumblr:copper').texture('tumblrbumblr:item/copper_helmet')
    event.create('tumblrbumblr:copper_chestplate', 'chestplate').tier('tumblrbumblr:copper').texture('tumblrbumblr:item/copper_chestplate')
    event.create('tumblrbumblr:copper_leggings', 'leggings').tier('tumblrbumblr:copper').texture('tumblrbumblr:item/copper_leggings')
    event.create('tumblrbumblr:copper_boots', 'boots').tier('tumblrbumblr:copper').texture('tumblrbumblr:item/copper_boots')
    event.create('tumblrbumblr:copper_sword', 'sword').tier('tumblrbumblr:copper').texture('tumblrbumblr:item/copper_sword')
    event.create('tumblrbumblr:copper_pickaxe', 'pickaxe').tier('tumblrbumblr:copper').texture('tumblrbumblr:item/copper_pickaxe')
    event.create('tumblrbumblr:copper_axe', 'axe').tier('tumblrbumblr:copper').texture('tumblrbumblr:item/copper_axe')
    event.create('tumblrbumblr:copper_shovel', 'shovel').tier('tumblrbumblr:copper').texture('tumblrbumblr:item/copper_shovel')
    event.create('tumblrbumblr:copper_hoe', 'hoe').tier('tumblrbumblr:copper').texture('tumblrbumblr:item/copper_hoe')
})