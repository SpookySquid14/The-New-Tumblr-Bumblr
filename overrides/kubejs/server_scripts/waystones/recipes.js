ServerEvents.recipes(event => {
    const warp_items = ['waystones:warp_stone', 'waystones:warp_dust']
    const scrolls = ['waystones:bound_scroll','waystones:return_scroll','waystones:warp_scroll']
    
    warp_items.forEach(warp_items => {
        event.replaceInput(
            {output: warp_items},
            'minecraft:amethyst_shard',
            'moremekanismprocessing:crystal_draconium'
        )
    })
    scrolls.forEach(scroll => {
        event.replaceInput(
            {output: scroll},
            'minecraft:purple_dye',
            'waystones:warp_dust'
        )
    })
})