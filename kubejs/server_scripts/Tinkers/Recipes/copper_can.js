ServerEvents.recipes(event => {
  event.shaped(
  Item.of('tconstruct:copper_can', 5), // arg 1: output
  [
    'C C',
    'C C', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    C: 'minecraft:copper_ingot'
  }
)
})

  ServerEvents.recipes(event => {
    //Removes Recipe via ID
    [
      'tconstruct:smeltery/copper_can'
    ].forEach((recipeID) => event.remove({id: recipeID}));
  })