const Discord = require('discord.js');
const api = new Discord.Client();

const auth = require('./secret.json');
const token = auth.token;

api.on('ready', () => {
    console.log(`Connected as ${api.user.tag}`);
    api.user.setActivity('Messages for `//`', {type: 'WATCHING'} );
});

api.on('message', evt => {
    if (evt.author.bot) return;
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
                    if(cmd.substring(4) == '' || cmd.substring(4) == null) {
                        evt.reply('Please enter message.')
                        .then(msg => msg.delete(3000))
                        .catch(console.error);
                        evt.delete()
                        // .then(msg => console.log(msg))
                        .catch(console.error);
                    } else {
                        evt.channel.send(cmd.substring(4));
                        evt.delete()
                        // .then(msg => console.log(msg))
                        .catch(console.error);
                    }
                }
                break;
            case 'clear':
                if(args[1] == 'bots'){

                }
                break;
            default:
                evt.reply(`Sorry this command is not available yet ;(`);
         }
     }
});

api.login(token);