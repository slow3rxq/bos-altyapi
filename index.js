const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js")
const mongoose = require("mongoose");
const db = require("croxydb")

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const {User, Message, GuildMember, ThreadMember, Channel } = Partials;



const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember, ThreadMember],
    allowedMentions: {
      parse: ["roles", "users", "everyone"],
      repliedUser: true,
    },
});

const {loadEvents} = require("./Handlers/eventHandler")
const {loadCommands} = require("./Handlers/commandHandler")
const {loadMongo} = require("./Handlers/mongoHandler")

client.commands = new Collection();
client.config = require("./config.json")

client.login(client.config.token).then(() => {
    loadEvents(client);
    loadCommands(client);
    loadMongo(client);
    
})
