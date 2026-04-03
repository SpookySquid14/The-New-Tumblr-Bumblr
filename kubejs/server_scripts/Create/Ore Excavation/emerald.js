ServerEvents.recipes(event => {
    [
        'createoreexcavation:drilling/emerald'
    ].forEach((recipeID) => event.remove({id: recipeID})),

    event.recipes.createoreexcavation.drilling('kubejs:dirty_raw_emerald','createoreexcavation:ore_vein_type/emerald',1200).stress(512).id('kubejs:dirty_raw_emerald_vein'),
    event.recipes.create.crushing(['moremekanismprocessing:dirty_dust_emerald', Item.of("moremekanismprocessing:shard_emerald").withChance(0.5)],'kubejs:dirty_raw_emerald'),
    event.recipes.minecraft.blasting("moremekanismprocessing:shard_emerald", "moremekanismprocessing:dirty_dust_emerald"),
    event.recipes.minecraft.crafting_shapeless('emerald',["4x moremekanismprocessing:shard_emerald"])
}
)