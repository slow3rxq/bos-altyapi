const { CommandInteraction } = require("discord.js")
const { EmbedBuilder } = require("discord.js")

module.exports = {
    name: "interactionCreate",

    execute(interaction, client) {
        if (!interaction.isChatInputCommand()) return;
        
        const command = client.commands.get(interaction.commandName);
        if (!command) return;
        command.execute(interaction, client)
    }
}