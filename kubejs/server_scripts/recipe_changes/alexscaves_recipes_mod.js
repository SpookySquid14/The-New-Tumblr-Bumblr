ServerEvents.recipes(event => {

    [
        'alexscaves:nuclear_siren',
        'alexscaves:uranium_rod',
        'alexscaves:nuclear_furnace_component'
    ].forEach((recipes) => event.replaceInput(
        {
            id: recipes,
        },
        '#forge:raw_materials/uranium',
        'alexscaves:uranium'
    )
    ),

    [
        'alexscaves:nuclear_bomb'
    ].forEach((recipes) => event.replaceInput(
        {
            id: recipes,
        },
        '#forge:storage_blocks/uranium',
        'alexscaves:block_of_uranium'
    )
    )

})

ServerEvents.tags('item', event => {
    event.remove('forge:storage_blocks/uranium', 'alexscaves:block_of_uranium'),
    event.add('forge:storage_blocks/alexs_uranium', 'alexscaves:block_of_uranium'),
    event.remove('forge:raw_materials/uranium', 'alexscaves:uranium'),
    event.add('forge:raw_materials/alexs_uranium', 'alexscaves:uranium'),
    event.remove('forge:nuggets/uranium', 'alexscaves:uranium_shard'),
    event.add('forge:nuggets/alexs_uranium', 'alexscaves:uranium_shard')
})