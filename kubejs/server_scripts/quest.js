// FTBQuestsEvents.customTask('4F8153CD7466E0FB',event => {
//     event.setCheck((task, player) => {
//         let werewolfStatus = player.nbt.ForgeCaps['vampirism:ifactionplayerhandler.faction']
//         console.log(werewolfStatus)
//     })
// })
FTBQuestsEvents.customTask('4F8153CD7466E0FB', event => {
    event.maxProgress = 3 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(player.level.thundering) { //Checks if it is Thundering at a player.
            task.progress++ // Adds progress to the quest.
            console.log(task.progress)
        }
    })
})