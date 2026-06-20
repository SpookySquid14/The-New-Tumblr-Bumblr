FTBQuestsEvents.customTask("6BD3109D4A3AF39D", event => {
    event.setCheck((task, player) => {
        let isWolf = player.nbt.ForgeCaps['"vampirism:ifactionplayerhandler": {faction}']
        if (isWolf == 'werewolves:werewolf') {
            // task.equals(true)
            task.setProgress(1)
            //task.addProgress('6BD3109D4A3AF39D', 1)
        }
    })
})