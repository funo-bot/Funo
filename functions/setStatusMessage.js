const logger = require('../util/logger');

module.exports = async (funo) => {
    funo.user.setActivity('Im back!');
}
