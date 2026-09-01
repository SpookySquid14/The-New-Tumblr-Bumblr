ServerEvents.recipes(event => {

    event.recipes.farmersdelight.cutting(
        '#tide:cookable/cooked_fish',
        '#c:tools/knife', // tool
        [ // results
            Item.of("tide:fish_slice",2),
            Item.of('minecraft:bone_meal')
        ],
        // '' // sound
    )
    event.recipes.farmersdelight.cutting(
        '#tide:cookable/small_cooked_fish',
        '#c:tools/knife', // tool
        [ // results
            Item.of("tide:fish_slice",1),
            Item.of('minecraft:bone_meal')
        ],
        // '' // sound
    )
    event.recipes.farmersdelight.cutting(
        '#tide:cookable/large_cooked_fish',
        '#c:tools/knife', // tool
        [ // results
            Item.of("tide:fish_slice",4),
            Item.of('minecraft:bone_meal')
        ],
        // '' // sound
    )
    event.remove({id: 'farmersdelight:cutting/fish_slice_cutting'})
})