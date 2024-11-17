const {
    webhook
} = require('../../config')

const {
    Webhook
} = require('discord-webhook-node')

const hook = new Webhook({
    'url': webhook,
    'retryOnLimit': true,
    'throwErrors': false
})

module.exports = (hook)