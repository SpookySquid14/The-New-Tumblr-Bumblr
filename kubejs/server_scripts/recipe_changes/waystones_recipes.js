ServerEvents.recipes(event => {
    const warp_items = ['waystones:warp_stone', 'waystones:warp_dust']
    const scrolls = ['waystones:blank_scroll','waystones:return_scroll','waystones:warp_scroll']
    


    warp_items.forEach(warp_items => {
        event.replaceInput(
            {output: warp_items},
            'minecraft:amethyst_shard',
            'enderscape:nebulite'
        )
    })
    event.replaceInput(
        {output: 'waystones:warp_dust'},
        'minecraft:ender_pearl',
        'ae2:ender_dust'
    )

})