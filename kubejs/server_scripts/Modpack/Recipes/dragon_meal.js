ServerEvents.recipes(event => {

    event.replaceInput(
        {output:'saintsdragons:hearty_dragon_meal'},
        'minecraft:cod',
        'tumbrbumblr:dragon_meal_fish_med'
    )
    event.replaceInput(
        {output:'saintsdragons:hearty_dragon_meal'},
        'minecraft:salmon',
        'tumbrbumblr:dragon_meal_fish_large'
    )
    event.replaceInput(
        {output:'saintsdragons:hearty_dragon_meal'},
        'minecraft:egg',
        '#forge:eggs'
    )
})