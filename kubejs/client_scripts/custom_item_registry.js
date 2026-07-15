ItemEvents.tooltip(event => {
    event.addAdvanced(['tumblrbumblr:sunken_eye_shard_1'], (item, advanced, text) => {
        text.add(1,[
            Text.of('This shard of the Sunken Eye was found within the Leviathan\'s bottomless stomach. Its sibling calls from the clouds of Acropolis')
        ])
    })
    event.addAdvanced(['tumblrbumblr:sunken_eye_shard_2'], (item, advanced, text) => {
        text.add(1,[
            Text.of('This shard of the Sunken Eye was guarded by Scylla. Its sibling cries from the abyss of The Sunken City')
        ])
    })
    event.addAdvanced(['tumblrbumblr:inscribed_tablet'], (item, advanced, text) => {
        text.add(1,[
            Text.of('A tablet found in the remains of the golem\'s creator. Its inscription bears instructions on creating a stable nether portal.')
        ])
    })
    event.addAdvanced(['tumblrbumblr:pale_totem'], (item, advanced, text) => {
        text.add(1,[
            Text.of('A crude totem of wilted branches held together by resin. It feels wrong just looking at it.')
        ])
    })
})