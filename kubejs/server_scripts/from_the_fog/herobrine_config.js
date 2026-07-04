// ServerEvents.loaded(event => {
// console.log(event.server.persistentData.loaded)
// if(!event.server.persistentData.loaded){
//   event.server.runCommand('tellraw @a "Hello"');
//   event.server.runCommand('function watching:config/sighting_chance/3_rare');
//   event.server.runCommand('function watching:config/start_delay/add');
//   event.server.runCommand('function watching:config/start_delay/add');
//   event.server.runCommand('function watching:config/start_delay/add');
//   event.server.runCommand('function watching:config/start_delay/add');
//   event.server.runCommand('function watching:config/start_delay/add');
//   event.server.runCommand('function watching:config/start_delay/add');
//   event.server.runCommand('function watching:config/start_delay/add');
//   event.server.runCommand('function watching:config/spot_noise/false');
//   event.server.runCommand('function watching:config/herobrine_skin/custom/-1_custom');
//   event.server.runCommand('function watching:config/jumpscare/false');
//   event.server.runCommand('function watching:config/creeping/false');
//   event.server.runCommand('function watching:config/no_sleep/false');
//   event.server.runCommand('function watching:config/nightmare/false');
//   event.server.runCommand('function watching:config/glowing_eyes/false')
//   //console.log(event.server.overworld().time, event.server.overworld().time < 24000)
//   if(event.server.overworld().time < 24000)
//     event.server.runCommand('time set day');
//   event.server.persistentData.loaded = true
// }
// })

ServerEvents.customCommand('fog', event => {
  event.server.runCommandSilent('tellraw @a "Hello"');
  event.server.runCommandSilent('function watching:config/sighting_chance/3_rare');
  event.server.runCommandSilent('function watching:config/start_delay/add');
  event.server.runCommandSilent('function watching:config/start_delay/add');
  event.server.runCommandSilent('function watching:config/start_delay/add');
  event.server.runCommandSilent('function watching:config/start_delay/add');
  event.server.runCommandSilent('function watching:config/start_delay/add');
  event.server.runCommandSilent('function watching:config/start_delay/add');
  event.server.runCommandSilent('function watching:config/start_delay/add');
  event.server.runCommandSilent('function watching:config/spot_noise/false');
  event.server.runCommandSilent('function watching:config/herobrine_skin/custom/-1_custom');
  event.server.runCommandSilent('function watching:config/jumpscare/false');
  event.server.runCommandSilent('function watching:config/creeping/false');
  event.server.runCommandSilent('function watching:config/no_sleep/false');
  event.server.runCommandSilent('function watching:config/nightmare/false');
  event.server.runCommandSilent('function watching:config/fearful_footsteps/false');
})