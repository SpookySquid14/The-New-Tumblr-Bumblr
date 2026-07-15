ItemEvents.rightClicked(event => {
    const { item, player, server } = event;
    const username = player.username;
    if (item.id == 'tumblrbumblr:pale_totem'){
        item.count--
        server.runCommandSilent(`execute as ${username} run effect give ${username} minecraft:darkness 7`)
        server.runCommandSilent(`execute at ${username} run playsound rootoffear:entity.wilted.reveal hostile ${username} ~ ~ ~ 0.2`)
        server.runCommandSilent(`tellraw ${username} {"text":"You shouldn\'t have done that. You\'ve woken up a monster. Keep your lights well lit, vessel.","font":"alt","hoverEvent":{"action":"show_text","contents":"You shouldn\'t have done that. You\'ve woken up a monster. Keep your lights well lit, vessel."}}`)
        server.runCommandSilent(`gamestage add ${username} the_desecrator`)
    }
    
})