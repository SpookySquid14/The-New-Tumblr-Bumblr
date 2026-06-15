//placeholder: Wither entity and force impact
EntityEvents.hurt(event => {
    const sourceEntity = event.source.getActual();
    
    if (event.entity.type == 'minecraft:wither' && sourceEntity && sourceEntity.type == 'minecraft:player') {
        // Check if the music has already been played
        if (!event.entity.persistentData.musicPlayed) {
            // Play the custom sound event at the location of the entity being hurt
            const command = `playsound irons_spellbooks:force_impact player @p ${event.entity.x} ${event.entity.y} ${event.entity.z} 1.0 1.0`;
            event.server.runCommandSilent(command);
            
            // Set the flag to indicate that the music has been played
            event.entity.persistentData.musicPlayed = true;
        }
    }
});

EntityEvents.death(event => {
    if (event.entity.type == 'cataclysm:the_harbinger') {
        // Stop the custom sound event for all players
        const command = `stopsound @a * cataclysm:harbinger_music`;
        event.server.runCommandSilent(command);
    } else if (event.entity.type == 'minecraft:player') {
        const sourceEntity = event.source.getActual();
        if (sourceEntity && sourceEntity.type == 'cataclysm:the_harbinger') {
            // Stop the custom sound event for all players
            const command = `stopsound @a * cataclysm:harbinger_music`;
            event.server.runCommandSilent(command);
        }
    }
});