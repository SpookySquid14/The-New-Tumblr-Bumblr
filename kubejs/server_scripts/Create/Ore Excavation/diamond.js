ServerEvents.recipes(event => {
    [
        'createoreexcavation:drilling/diamond',
        'createoreexcavation:drilling/hardened_diamond'
    ].forEach((recipeID) => event.remove({id: recipeID})),

    event.recipes.createoreexcavation.drilling('kubejs:dirty_raw_diamond','createoreexcavation:ore_vein_type/diamond',1200).stress(512).id('kubejs:dirty_raw_diamond_vein'),
    event.recipes.createoreexcavation.drilling(['kubejs:dirty_raw_diamond',Item.of("createoreexcavation:raw_diamond").withChance(0.1)],'createoreexcavation:ore_vein_type/hardened_diamond',400).stress(1024).id('kubejs:dirty_hardened_diamond_vein'),
    event.recipes.create.crushing(['moremekanismprocessing:dirty_dust_diamond', Item.of("moremekanismprocessing:shard_diamond").withChance(0.5)],'kubejs:dirty_raw_diamond'),
    event.recipes.minecraft.blasting("moremekanismprocessing:shard_diamond", "moremekanismprocessing:dirty_dust_diamond"),
    event.recipes.minecraft.crafting_shapeless('diamond',["4x moremekanismprocessing:shard_diamond"])
}
)