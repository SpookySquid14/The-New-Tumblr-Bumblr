// // const $TagKey = Java.loadClass("net.minecraft.tags.TagKey")
// // const $Registries = Java.loadClass("net.minecraft.core.registries.Registries")
// // const FORGE_BOSSES = $TagKey.create($Registries.ENTITY_TYPE, "forge:bosses")
// // const bossTagEntries = ['Is_Act','Act','is_Awaken','has_necklace','active']

// ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingEvent$LivingTickEvent", event => global.onLivingTickEvent(event))

// global.onLivingTickEvent = event => {
    
//     const boss = event.entity
//     const bossData = boss.persistentData
//     const world = boss.server
//     let checkedTag

//     if (!boss.entityType.is(FORGE_BOSSES)) return
    
//     // console.log(boss.entityType)
//     //console.log(boss.level)
    

//     for(let i = 0; i<bossTagEntries.length; i++){
//     // console.log("Checking tags for: "+bossTagEntries[i])
//     // console.log(boss.nbt.contains(bossTagEntries[i].toString()))
//     if(boss.nbt.contains(bossTagEntries[i].toString())) checkedTag = bossTagEntries[i].toString()  
//     }
    
//     if (checkedTag==null) return
//     // console.log("The tag to check is: "+checkedTag)

//     //Checking for nbt
//     let oldNbtValue = '0b'
//     let newNbtValue = boss.nbt.get(checkedTag)
//     //compare
//     // console.log("Old NBT: "+oldNbtValue)
//     // console.log("New NBT: "+newNbtValue)
//     if (newNbtValue==oldNbtValue) return
//     // console.log("Value changed")
//     // oldNbtValue=newNbtValue

//     if (!bossData.musicPlayed){
//         if (newNbtValue == '1b'){
//             // Play the custom sound event at the location of the entity being hurt
//             const command = `playsound cataclysm:harbinger_music player @p ${event.entity.x} ${event.entity.y} ${event.entity.z} 1.0 1.0`;
//             //plays music only if world isn't null
//             if (world) world.runCommandSilent(command);
//         }
            
            
//             // Set the flag to indicate that the music has been played
//             bossData.musicPlayed = true;
//     }
// }