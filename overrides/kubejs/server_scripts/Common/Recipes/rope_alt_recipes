ServerEvents.recipes(event => {
  event.shaped(
  Item.of('supplementaries:rope', 3), // arg 1: output
  [
    ' A ',
    ' A ', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'minecraft:string'
  }
)
})

  ServerEvents.recipes(event => {
    //Removes Recipe via Item ID
    [
      'bbb:rope'
    ].forEach((itemID) => event.remove({id: itemID}));
  })