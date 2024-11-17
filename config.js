module.exports = {
    'token': process.env.token, // Your bot token, activate all bot intents in discord developer portal.
    'clientid': '1296597383781810177', // Your discord bot id.
    'guildid': '1290607198317051977', // Id of a private server to load the bot's slash commands.
    'ownerid': [process.env.ownerid], // Add discord ids to the array to access the commands.
    'webhook': process.env.webhook // Your discord webhook url.
}
