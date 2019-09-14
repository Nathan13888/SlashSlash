const Discord = require('discord.js');
const api = new Discord.Client();

const auth = require('./secret.json');
const token = auth.token;

// Initialize Discord Bot

api.on('ready', () => {
    console.log(`Connected as ${api.user.tag}`);
});

api.on('message', msg => {
    console.log({msg});
    if (msg.substring(0, 2) == '//') {
        const mess = msg.substring(2).toLowerCase;
        const args = mess.split(' ');
        switch(args[0]) {
            case 'ping':
                msg.reply('pong!')
                break;
            case 'say':
                if (args[1] !== null) {
                    msg.reply(mess.substring(4));
                }
                break;
            default:
                api.sendMessage({
                    to: channelID,
                    message: `Sorry this command is not available yet ;(`
                });
         }
     }
});

client.login(token);

// module.exports.token = token;
// module.exports.bot = api;