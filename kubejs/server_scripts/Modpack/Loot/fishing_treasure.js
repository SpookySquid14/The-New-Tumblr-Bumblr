LootJS.modifiers((event) => {
    // by id
    event
        .addLootTableModifier("minecraft:gameplay/fishing/treasure")
        .randomChance(0.6)
        .addLoot("aquaculture:box");
    event
        .addLootTableModifier("minecraft:gameplay/fishing/treasure")
        .randomChance(0.4)
        .addLoot("aquaculture:lockbox");
    event
        .addLootTableModifier("minecraft:gameplay/fishing/treasure")
        .randomChance(0.1)
        .addLoot("aquaculture:treasure_chest");
});