// ADD VALIDATORJS

const api = require('bot.js').bot;

modules.exports = {
    sendreply: function (msg) {
        api.sendMessage({
            to: channelID,
            message: String.toString(msg)
        });
    }
}