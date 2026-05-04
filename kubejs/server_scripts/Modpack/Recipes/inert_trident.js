ServerEvents.recipes(event => {
    event.remove({id:'hybrid-aquatic:trident'})

    event.replaceInput(
        {output:'apotheosis:inert_trident'},
        'minecraft:iron_ingot',
        'hybrid-aquatic:prismarine_rod'
    )
    event.replaceInput(
        {output:'apotheosis:inert_trident'},
        'minecraft:nautilus_shell',
        '#tumblrbumblr:shark_teeth'
    )
})