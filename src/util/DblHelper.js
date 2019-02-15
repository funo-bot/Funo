const DBL = require('dblapi.js');
const config = require('../../config.json')

module.exports = funo => {
  const dbl = new DBL(config.DBLAPI_token, { webhookPort: 5000, webhookAuth: config.webHookAuth });

  dbl.webhook.on('ready', hook => console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`))
  dbl.webhook.on('vote', vote => console.log(`User with ID ${vote.user} just voted!`))
}