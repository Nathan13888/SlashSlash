const Discord = require('discord.io');
const logger = require('winston');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

const auth = require('./secret.json');
const token = auth.token;

// Initialize Discord Bot
var api = new Discord.Client({
   token: token,
   autorun: true
});

const util = require('util.js');

api.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

api.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `//`
    if (message.substring(0, 2) == '//') {
        var args = message.substring(2).split(' ');
       
        args = args.splice(1);
        switch(args[0]) {
            case 'ping':
                api.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            case 'say':
                util.sendReply("test");
            break;
         }
     }
});

module.exports.token = token;
module.exports.bot = api;