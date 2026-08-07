ServerEvents.recipes(event => {
    const warp_items = ['waystones:warp_stone', 'waystones:warp_dust']
    const scrolls = ['waystones:bound_scroll','waystones:return_scroll','waystones:warp_scroll']
    
    event.recipes.occultism.crushing(
		'ae2:ender_dust',
		'#forge:ender_pearls'
	)

    warp_items.forEach(warp_items => {
        event.replaceInput(
            {output: warp_items},
            'minecraft:amethyst_shard',
            'saintsdragons:draconian_flesh'
        )
    })
    event.replaceInput(
        {output: 'waystones:warp_dust'},
        'minecraft:ender_pearl',
        'ae2:ender_dust'
    )
    scrolls.forEach(scroll => {
        event.replaceInput(
            {output: scroll},
            'minecraft:purple_dye',
            'waystones:warp_dust'
        )
    })
})