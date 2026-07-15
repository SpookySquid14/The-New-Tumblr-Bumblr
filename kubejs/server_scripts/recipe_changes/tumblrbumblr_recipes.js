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

    event.shaped("tumblrbumblr:pale_totem",
          [
    'BAB',
    'ACA', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'minecraft:pale_oak_sapling',
    B: "minecraft:resin_clump",
    C: "minecraft:creaking_heart"
  }
    )
    
    event.shaped("moremekanismprocessing:crystal_draconium",[
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: "minecraft:chorus_fruit",
        B: 'minecraft:amethyst_shard'
    }
)

    event.remove({id:"moremekanismprocessing:processing/draconium/crystal/from_slurry"})
    event.remove({id:"moremekanismprocessing:processing/draconium/shard/from_crystal"})
    event.remove({output: "moremekanismprocessing:draconium_ingot"})
    event.remove({output: "moremekanismprocessing:draconium_nugget"})

    event.shaped("moremekanismprocessing:draconium_ingot",
          [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'moremekanismprocessing:crystal_draconium',
    B: "minecraft:ender_eye"
  }
    )
})