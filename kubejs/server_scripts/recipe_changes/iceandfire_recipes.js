ServerEvents.recipes(event => {
event.shaped(Item.of('tumblrbumblr:dragonsteel_upgrade_template', 2), [
    'SBS',
    'BTB',
    'SBS'
  ],
  {
    S: '#iceandfire:scales/dragon',
    B: 'iceandfire:dragonbone',
    T: 'tumblrbumblr:dragonsteel_upgrade_template'
  })

  const dragonscale_fire_color = ['red','bronze','gray','green']
  const dragonscale_ice_color = ['blue','sapphire','silver','white']
  const dragonscale_lightning_color = ['electric','amethyst','copper','black']

  dragonscale_fire_color.forEach(element => {
    event.smithing('iceandfire:dragonsteel_fire_helmet','tumblrbumblr:dragonsteel_upgrade_template',`iceandfire:armor_${element}_helmet`,'iceandfire:dragonsteel_fire_ingot')
    event.smithing('iceandfire:dragonsteel_fire_chestplate','tumblrbumblr:dragonsteel_upgrade_template',`iceandfire:armor_${element}_chestplate`,'iceandfire:dragonsteel_fire_ingot')
    event.smithing('iceandfire:dragonsteel_fire_leggings','tumblrbumblr:dragonsteel_upgrade_template',`iceandfire:armor_${element}_leggings`,'iceandfire:dragonsteel_fire_ingot')
    event.smithing('iceandfire:dragonsteel_fire_boots','tumblrbumblr:dragonsteel_upgrade_template',`iceandfire:armor_${element}_boots`,'iceandfire:dragonsteel_fire_ingot')
  });
  dragonscale_ice_color.forEach(element => {
    event.smithing('iceandfire:dragonsteel_ice_helmet','tumblrbumblr:dragonsteel_upgrade_template',`iceandfire:armor_${element}_helmet`,'iceandfire:dragonsteel_ice_ingot')
    event.smithing('iceandfire:dragonsteel_ice_chestplate','tumblrbumblr:dragonsteel_upgrade_template',`iceandfire:armor_${element}_chestplate`,'iceandfire:dragonsteel_ice_ingot')
    event.smithing('iceandfire:dragonsteel_ice_leggings','tumblrbumblr:dragonsteel_upgrade_template',`iceandfire:armor_${element}_leggings`,'iceandfire:dragonsteel_ice_ingot')
    event.smithing('iceandfire:dragonsteel_ice_boots','tumblrbumblr:dragonsteel_upgrade_template',`iceandfire:armor_${element}_boots`,'iceandfire:dragonsteel_ice_ingot')
  });
  dragonscale_ice_color.forEach(element => {
    event.smithing('iceandfire:dragonsteel_lightning_helmet','tumblrbumblr:dragonsteel_upgrade_template',`iceandfire:armor_${element}_helmet`,'iceandfire:dragonsteel_lightning_ingot')
    event.smithing('iceandfire:dragonsteel_lightning_chestplate','tumblrbumblr:dragonsteel_upgrade_template',`iceandfire:armor_${element}_chestplate`,'iceandfire:dragonsteel_lightning_ingot')
    event.smithing('iceandfire:dragonsteel_lightning_leggings','tumblrbumblr:dragonsteel_upgrade_template',`iceandfire:armor_${element}_leggings`,'iceandfire:dragonsteel_lightning_ingot')
    event.smithing('iceandfire:dragonsteel_lightning_boots','tumblrbumblr:dragonsteel_upgrade_template',`iceandfire:armor_${element}_boots`,'iceandfire:dragonsteel_lightning_ingot')
  });

  const steels = ['fire','ice','lightning']
  steels.forEach (steel => {
    event.smithing(`iceandfire:dragonsteel_${steel}_sword`,'tumblrbumblr:dragonsteel_upgrade_template','iceandfire:dragonbone_sword',`iceandfire:dragonsteel_${steel}_ingot`)
    event.smithing(`iceandfire:dragonsteel_${steel}_axe`,'tumblrbumblr:dragonsteel_upgrade_template','iceandfire:dragonbone_axe',`iceandfire:dragonsteel_${steel}_ingot`)
    event.smithing(`iceandfire:dragonsteel_${steel}_pickaxe`,'tumblrbumblr:dragonsteel_upgrade_template','iceandfire:dragonbone_pickaxe',`iceandfire:dragonsteel_${steel}_ingot`)
    event.smithing(`iceandfire:dragonsteel_${steel}_shovel`,'tumblrbumblr:dragonsteel_upgrade_template','iceandfire:dragonbone_shovel',`iceandfire:dragonsteel_${steel}_ingot`)
    event.smithing(`iceandfire:dragonsteel_${steel}_hoe`,'tumblrbumblr:dragonsteel_upgrade_template','iceandfire:dragonbone_hoe',`iceandfire:dragonsteel_${steel}_ingot`)

    event.remove({id: `iceandfire:dragonsteel_${steel}_helmet`})
    event.remove({id: `iceandfire:dragonsteel_${steel}_chestplate`})
    event.remove({id: `iceandfire:dragonsteel_${steel}_leggings`})
    event.remove({id: `iceandfire:dragonsteel_${steel}_boots`})
    event.remove({id: `iceandfire:dragonsteel_${steel}_sword`})
    event.remove({id: `iceandfire:dragonsteel_${steel}_axe`})
    event.remove({id: `iceandfire:dragonsteel_${steel}_pickaxe`})
    event.remove({id: `iceandfire:dragonsteel_${steel}_shovel`})
    event.remove({id: `iceandfire:dragonsteel_${steel}_hoe`})
  });

})
