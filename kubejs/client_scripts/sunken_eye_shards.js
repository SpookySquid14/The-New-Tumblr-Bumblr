ItemEvents.tooltip(event => {
    event.addAdvanced(['kubejs:sunken_eye_shard_1'], (item, advanced, text) => {
        text.add(1,[
            Text.of('This shard of the Sunken Eye was found within the Leviathan\'s bottomless stomach. Its sibling calls from the clouds of Acropolis')
        ])
    })
    event.addAdvanced(['kubejs:sunken_eye_shard_2'], (item, advanced, text) => {
        text.add(1,[
            Text.of('This shard of the Sunken Eye was guarded by Scylla. Its sibling cries from the abyss of The Sunken City')
        ])
    })
})