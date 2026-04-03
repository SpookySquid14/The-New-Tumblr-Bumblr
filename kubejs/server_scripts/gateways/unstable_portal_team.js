BlockEvents.rightClicked(Block, event => {
    const nbt = event.item.nbt

    if (!(nbt && nbt['gateway'] == 'gateways:nether_invasion')) return
    event.server.runCommand('team add Nether_Gateway')
})