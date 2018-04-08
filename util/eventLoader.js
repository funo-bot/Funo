const reqEvent = (event) => require(`../events/${event}`)
module.exports = funo => {
    funo.on('ready', () => reqEvent('ready')(funo));
  //  funo.on('reconnecting', () => reqEvent('reconnecting')(funo));
  //  funo.on('disconnect', () => reqEvent('disconnect')(funo));
  //  funo.on('message', reqEvent('message'));
};