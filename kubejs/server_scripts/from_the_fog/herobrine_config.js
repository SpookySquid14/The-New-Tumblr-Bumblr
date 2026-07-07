ServerEvents.customCommand('fog', event => {
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
  event.server.runCommandSilent('tellraw @p "Hint: Hover Over Text"');
})