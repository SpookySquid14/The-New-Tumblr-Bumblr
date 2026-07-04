ServerEvents.recipes(event => {
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {tag:'tide:cookable/cooked_fish'}
        ],
        tool: {tag: 'forge:tools/knives'},
        result: [
            {item:'tide:fish_slice', count: 2},
            {item:'minecraft:bone_meal'}
        ]
    })
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {tag:'tide:cookable/large_cooked_fish'}
        ],
        tool: {tag: 'forge:tools/knives'},
        result: [
            {item:'tide:fish_slice', count: 4},
            {item:'minecraft:bone_meal'}
        ]
    })
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {tag:'tide:cookable/small_cooked_fish'}
        ],
        tool: {tag: 'forge:tools/knives'},
        result: [
            {item:'tide:fish_slice', count: 1},
            {item:'minecraft:bone_meal'}
        ]
    })
    event.remove({id: 'farmersdelight:cutting/fish_slice_cutting'})
})