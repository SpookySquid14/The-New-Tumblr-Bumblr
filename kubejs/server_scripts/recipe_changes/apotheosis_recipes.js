ServerEvents.recipes(event=>{

    event.custom({
	"type": "apothic_enchanting:infusion",
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
		"id": "minecraft:nether_star",
		"count": 1
	}
	})
	
    event.remove(
		{id: 'apothic_enchanting:inert_trident'}
	)

	event.replaceOutput(
		{output: 'minecraft:trident'},
		'minecraft:trident',
		'apothic_enchanting:inert_trident'
	)
	event.replaceInput(
		{output: 'minecraft:trident'},
		'minecraft:trident',
		'apothic_enchanting:inert_trident'
	)
	event.replaceInput(
		{output: 'apothic_enchanting:hellshelf'},
		'minecraft:potion',
		'minecraft:nether_wart'
	)
})