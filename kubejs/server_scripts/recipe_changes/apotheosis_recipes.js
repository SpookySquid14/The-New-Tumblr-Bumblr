ServerEvents.recipes(event=>{

    event.custom({
	"type": "apotheosis:enchanting",
	"conditions": [{
		"type": "apotheosis:module",
		"module": "enchantment"
	}],
	"input": {
		"item": "tumblrbumblr:nether_star_drained"
	},
	"requirements": {
		"eterna": 35,
		"quanta": 75,
		"arcana": 10
	},
	"max_requirements": {
		"eterna": -1,
		"quanta": 90,
		"arcana": 25
	},
	"result": {
		"item": "minecraft:nether_star",
		"count": 1
	}
	})
	
    event.replaceInput(
        {output:'apotheosis:inert_trident'},
        'minecraft:iron_ingot',
        'minecraft:prismarine_shard'
    )
    event.replaceInput(
        {output:'apotheosis:inert_trident'},
        'minecraft:nautilus_shell',
        '#tumblrbumblr:shark_teeth'
    )
})