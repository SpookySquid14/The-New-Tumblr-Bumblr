ServerEvents.tags("item", event => {

    event.add("forge:raw_fishes",'#tide:cookable_fish')
    event.add("tumbrbumblr:dragon_meal_fish_large", '#tide:cookable/large_cooked_fish')
    event.add("tumbrbumblr:dragon_meal_fish_large", 'minecraft:salmon')
    event.add("tumbrbumblr:dragon_meal_fish_med", '#tide:cookable/cooked_fish')
    event.add("tumbrbumblr:dragon_meal_fish_med", 'minecraft:cod')

    const dragon_food_tags = ['saintsdragons:dragon_food','saintsdragons:foods/varasuchus','saintsdragons:foods/cindervane','saintsdragons:foods/raevyx','saintsdragons:foods/ignivorus','saintsdragons:foods/stegonaut','saintsdragons:foods/volitans']

    dragon_food_tags.forEach(food_tag => {
        event.add(food_tag,"#tide:fish")
    });    
})