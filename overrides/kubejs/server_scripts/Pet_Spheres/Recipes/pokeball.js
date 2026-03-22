ServerEvents.recipes(event => {
  event.shaped(
  Item.of('petcapturetool:capture_tool', 1), // arg 1: output
  [
    'AAA',
    'BCB', // arg 2: the shape (array of strings)
    'DDD'
  ],
  {
    A: 'minecraft:redstone',
    B: 'minecraft:coal',  //arg 3: the mapping object
    C: 'minecraft:stone_button',
    D: 'minecraft:iron_ingot'
  }
),
    [
      'petcapturetool:capture_tool'
    ].forEach((recipeID) => event.remove({id: recipeID}));
})