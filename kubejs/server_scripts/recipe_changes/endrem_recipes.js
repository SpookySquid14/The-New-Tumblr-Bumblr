ServerEvents.recipes(event => {
    event.shapeless(Item.of("endrem:exotic_eye",1),[
        "tumblrbumblr:sunken_eye_shard_1",
        "tumblrbumblr:sunken_eye_shard_2"
    ]).id("modpack:sunken_eye")
    event.remove({id: 'endrem:exotic_eye'}),
    event.remove({id: 'endrem:undead_eye'}),
    event.remove({id: 'endrem:witch_eye'})
})