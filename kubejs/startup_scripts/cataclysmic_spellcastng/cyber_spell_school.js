//Creating attributes
StartupEvents.registry('attribute', event => {
	// Use the `spell` type for these attributes and set all the values needed. The default value has to be higher than the minimum value and lower than the maximum value.
	event.create('cataclysmic_spellcasting:cyber_spell_power', 'irons_spells_js:spell').setDefaultValue(1).setMinimumValue(0).setMaximumValue(10)
	event.create('cataclysmic_spellcasting:cyber_spell_resistance', 'irons_spells_js:spell').setDefaultValue(1).setMinimumValue(0).setMaximumValue(10)
})
//giving all mobs attributes
EntityJSEvents.attributes(event => {
    event.allTypes.forEach(type => {
        event.modify(type, (a) => {
            a.add('cataclysmic_spellcasting:cyber_spell_power')
            a.add('cataclysmic_spellcasting:cyber_spell_resistance')
        })
    })
})
//registering school
StartupEvents.registry('irons_spellbooks:schools', event => {
	// You can use the ID of this school in any spell you create, or to change the school of an existing spell using the Iron's Spells server config.
	event.create('cataclysmic_spellcasting:cyber')
		.setName(Component.of('Cyber').red()) // This sets what the school will be displayed as. This needs to be a Component.
		.setFocus('cataclysmic_spellcasting:cyber_focus') // The focus needs to be an item tag. You can add this same tag to an item to make it the focus.
		.setPowerAttribute('cataclysmic_spellcasting:cyber_spell_power') // This sets the power attribute.
		.setResistanceAttribute('cataclysmic_spellcasting:cyber_spell_resistance') // This sets the resistance attribute.
		.setDefaultCastSound('cataclysm:harbinger_laser') // You can also set a default cast sound for each spell in the school.
		// In 1.20.1 and up, creating spell schools requires a damage type to be inputted.
		// You can create a damage type using datapacks. https://minecraft.wiki/w/Damage_type
		.setDamageType('cataclysmic_spellcasting:cyber_damage')
})