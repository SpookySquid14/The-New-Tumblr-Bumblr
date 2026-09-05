LootJS.lootTables(event => {
    event.getLootTable("tide:chests/crates/deep").firstPool().addEntry("endrem:cryptic_eye").when(conditions => {conditions.randomChance(100)})
})