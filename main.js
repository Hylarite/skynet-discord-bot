require('dotenv').config(); // global function

const Discord = require('discord.js')
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
    console.log(`${config.botinfo.name} is version ${config.botinfo.version}`);
    client.user.setActivity("planet earth", { type: "WATCHING" });
})

client.on('message', message => {

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;


    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    cmd = client.commands.get(command);


    if (command === 'beep') {
        cmd.execute(message, args);
    }

    if (command === 'shit') {
        cmd.execute(message, args);
    }

    if (command === 'sad') {
        cmd.execute(message, args);
    }

    if (command === 'happy') {
        cmd.execute(message, args);
    }

    if (command === 'damn') {
        cmd.execute(message, args);
    }

    if (command === 'nice') {
        cmd.execute(message, args);
    }

    if (command === 'id') {
        cmd.execute(message, args);
    }

    if (command === 'total') {
        cmd.execute(message, args);
    }
    if (command === '69') {
        cmd.execute(message, args);
    }
    if (command === 'cat') {
        cmd.execute(message, args);
    }
    if (command === 'mofo') {
        cmd.execute(message, args);
    }
    if (command === 'intro') {
        cmd.execute(message, args);
    }

});




client.login(process.env.BOT_TOKEN) // process basically includes everything about the machine