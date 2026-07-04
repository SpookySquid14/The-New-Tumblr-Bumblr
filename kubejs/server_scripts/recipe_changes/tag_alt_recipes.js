ServerEvents.recipes(event => {
  //Convert any Chest into Vanilla
  event.shapeless(Item.of('minecraft:chest', 1), [
    '#forge:chests/wooden'
  ])

  event.replaceInput(
    {id:'farmersdelight:organic_compost_from_tree_bark'},
    'farmersdelight:tree_bark',
    '#immersive_weathering:bark'
  )

  //Craft vanilla ladders from Sticks
  event.shaped(Item.of('minecraft:ladder', 3), [
    'P P',
    'PPP',
    'P P'
  ],
  {
    P: 'minecraft:stick'
  })
  //Craft chests from ANY planks
  event.shaped(Item.of('minecraft:chest', 1), [
        'PPP',
        'P P',
        'PPP'
  ],
  {
        P: '#minecraft:planks'
  })
})
