ServerEvents.recipes(event => {
    event.replaceInput(
        {output:'goety:focus_bag'},
        'minecraft:leather',
        '#c:leathers'
    )
    event.remove({id: 'naturalist:cooked_egg'})
    event.remove({id: 'naturalist:cooked_egg_from_campfire_cooking'})
    event.remove({id: 'naturalist:cooked_egg_from_smoking'})
})