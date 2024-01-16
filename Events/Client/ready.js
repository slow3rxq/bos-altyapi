const {Client, ActivityType} = require("discord.js")
const mongoose = require("mongoose")

module.exports = {
    name: "ready",
    once: true,
  async execute(client) {
        console.log(`[+] ${client.user.username} ismiyle giriş yaptı. `)
    

        client.user.setActivity(`bnewixua <3`, { type: ActivityType.Watching })
    }
}