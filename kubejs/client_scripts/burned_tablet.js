ItemEvents.tooltip(event => {
    event.addAdvanced(['kubejs:burned_tablet'], (item, advanced, text) => {
        text.add(1,[
            Text.of('A tablet found embedded in the netherite golem. Its inscription bears instructions on stable nether portals.')
        ])
    })
})