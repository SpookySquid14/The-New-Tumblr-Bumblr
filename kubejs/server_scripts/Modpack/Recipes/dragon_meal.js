ServerEvents.recipes(event => {

    event.replaceInput(
        {output:'saintsdragons:hearty_dragon_meal'},
        'minecraft:cod',
        '#tide:cookable/cooked_fish'
    )
    event.replaceInput(
        {output:'saintsdragons:hearty_dragon_meal'},
        'minecraft:salmon',
        '#tide:cookable/large_cooked_fish'
    )
})