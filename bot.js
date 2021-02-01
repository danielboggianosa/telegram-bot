const { Telegraf } = require("telegraf")

const bot = new Telegraf(process.env.TELEGRAM_TOKEN)

bot.start((ctx) => {
    ctx.reply('Welcome')
})

bot.command('i', (ctx) => {
    ctx.reply(JSON.stringify(ctx.message))
})

bot.command('login', ctx => {
    ctx.reply("Ingresa tu clave secreta")
})

bot.on('text', ctx => {
    if (ctx.message.text == "hola") {
        const chatId = ctx.chat.id
        const messageId = ctx.message.id
        // telegram.deleteMessage(chatId, messageId)
        ctx.reply('autorizado')
    }
    else {
        ctx.reply('no autorizado')
    }
})

bot.launch()