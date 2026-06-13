ServerEvents.recipes(event => {

    event.shaped("minecraft:elytra",
          [
    'BAB',
    'BCB', // arg 2: the shape (array of strings)
    'B B'
  ],
  {
    A: 'moremekanismprocessing:draconium_ingot',
    B: "minecraft:phantom_membrane",
    C: "minecraft:elytra"
  }
    ).keepIngredient('minecraft:elytra')
})