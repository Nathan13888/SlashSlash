const Discord = require('discord.js');
const api = new Discord.Client();

const auth = require('./secret.json');
const token = auth.token;

// Initialize Discord Bot

api.on('ready', () => {
    console.log(`Connected as ${api.user.tag}`);
});

api.on('message', evt => {
    if (evt.content.substring(0, 2) == '//') {
        const cmd = evt.content.substring(2).toLowerCase();

        // Log Commands
        console.log(`[COMMAND] ${evt.author.tag} executed '${cmd}' `);

        const args = cmd.split(' ');
        switch(args[0]) {
            case 'ping':
                evt.reply('pong!')
                break;
            case 'say':
                if (args[1] !== null) {
                    evt.channel.send(cmd.substring(4));
                    evt.delete()
                    .then(msg => {})
                    .catch(console.error);
                }
                break;
            default:
                evt.reply(`Sorry this command is not available yet ;(`);
         }
     }
});

api.login(token);