events.listen('player.logged_in', function (event) {
  // Check if player doesn't have "starting_items" gamestage yet
  if (!event.hasGameStage('starting_items')) {
    // Add the gamestage
    event.addGameStage('starting_items');
    // Give manuals to player on new login
    event.player.give(item.of('immersiveengineering:manual'));
    event.player.give(item.of('immersivereailroading:item_manual'));
	event.player.give(item.of('patchouli:guide_book', { 'patchouli:book': 'pneumaticcraft:book' }));
	event.player.give(item.of('patchouli:guide_book', { 'patchouli:book': 'industrialforegoing:industrial_foregoing' }));
	event.player.give(item.of('patchouli:guide_book', { 'patchouli:book': 'engineerstools:engineerstools_manual' }));
	event.player.give(item.of('patchouli:guide_book', { 'patchouli:book': 'engineersdecor:engineersdecor_manual' }));
  }
});