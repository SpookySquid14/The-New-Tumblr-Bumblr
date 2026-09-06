ServerEvents.recipes(event => {
    event.replaceInput(
        {output:'silentgear:flax_string'},
        'silentgear:flax_fiber',
        'supplementaries:flax'
    )
    event.recipes.minecraft.crafting_shapeless('supplementaries:flax',["silentgear:flax_fiber"])
    event.recipes.minecraft.crafting_shapeless('supplementaries:flax_seeds',["silentgear:flax_seeds"])
})