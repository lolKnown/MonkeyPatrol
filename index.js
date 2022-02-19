const Discord = require("discord.js")

const TOKEN = "OTQ0NjkwOTQ3ODE4NjU5ODUw.YhFSAQ.I5mRCTDFii2_4BqVOs3fvIrAjiI"
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == ">hello"){
        message.reply("Hello World!")
    }
})

client.login(TOKEN)