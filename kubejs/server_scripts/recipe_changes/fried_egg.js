ServerEvents.recipes(event => {
    event.replaceInput(
        {output:'farmersdelight:fried_egg'},
        'minecraft:egg',
        '#forge:eggs'
    )
    event.remove({id: 'naturalist:cooked_egg'})
    event.remove({id: 'naturalist:cooked_egg_from_campfire_cooking'})
    event.remove({id: 'naturalist:cooked_egg_from_smoking'})
})