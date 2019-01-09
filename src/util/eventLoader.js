const reqEvent = (event) => require(`../events/${event}`);
const logger = require('./logger');

module.exports = funo => {
  funo.on('ready', () => reqEvent('ready')(funo));
  funo.on('reconnecting', () => reqEvent('reconnecting')(funo));
  funo.on('message', reqEvent('message'));
  funo.on('guildCreate', reqEvent('guildCreate'));
  funo.on('guildDelete', reqEvent('guildDelete'));

  logger.info('All events loaded!');
}
