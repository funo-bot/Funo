const logger = require("../util/Logger");

module.exports = (error) => {
  logger.error("An unknown error has occured. " + error.stack)
};
