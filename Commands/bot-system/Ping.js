const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder, ActionRowBuilder, PermissionsBitField, ButtonBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping2")
    .setDescription("Ping Ölçer"),

  async execute(interaction, client) {

    const ping = new EmbedBuilder()
    .setDescription(`> Pong, Botun geçikmesi: **${client.ws.ping}**`)
    .setColor("Green")

    interaction.reply({embeds: [ping]})
  }
}