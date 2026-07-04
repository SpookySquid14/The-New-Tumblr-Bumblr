ServerEvents.recipes(event => {
    //Removes Recipe via Item ID
    [
      'bbb:rope'
    ].forEach((itemID) => event.remove({id: itemID}));
  })