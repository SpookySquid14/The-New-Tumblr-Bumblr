// Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:wasted_radioactive"}}')
ServerEvents.recipes(event => {
    
    const woodTypes = ['oak','spruce','jungle','dark_oak','acacia','birch','crimson','warped','mangrove','cherry','bamboo']
    woodTypes.forEach(woodType => {
        event.shapeless(Item.of('sophisticatedstorage:chest', `{woodType: ${woodType}}`), [
            `quark:${woodType}_chest`,
            'minecraft:lever'
        ])
    })    
})